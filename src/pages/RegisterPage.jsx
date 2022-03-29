import React, { Fragment, useContext } from 'react'
import { useState } from "react";
import { auth } from '../database/firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import '../App.css'
import Alert from '../UI/Alert';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { DatabaseHandler } from '../database/DatabaseHandler';
import AuthContext from '../store/authContext';
import Modal from '../UI/Modal';

export default function SignUpPage() {

    const [inputs, setInputs] = useState({});
    const [error,setError] = useState({"isError":false});
    const [registered,setRegistered] = useState(false);
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        const {email,userName,majority,birthDate} = inputs;
        console.log(email,userName,majority,birthDate);
        
        createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
        .then((userCredential) => {
         
            const user = userCredential.user;
            console.log(userCredential,user);
            DatabaseHandler.registerUserData(user.uid,userName,email,birthDate,majority);
            setRegistered(true);
            localStorage.setItem("uid",user.uid);
            authCtx.onLogin(user.uid);
            
            ;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            setError({
                "isError":true,
                "errorMessage":errorMessage,
                "errorCode": errorCode
            });
        });
        
        console.log(inputs);
      }
    return (
        <Fragment>
        <Navbar/>
        <div className="text-center m-5-auto">
            <h5>Create your personal account</h5>
            <form action="/home" onSubmit={handleSubmit}>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="userName" value={inputs.userName } 
                            onChange={handleChange} required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" value={inputs.email || ""} 
                            onChange={handleChange} required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" value={inputs.password || ""} 
                            onChange={handleChange} required />
                </p>
                <p>
                    <label>Date of birth</label><br/>
                    <input type="date" name="birthDate" value={inputs.birthDate || ""} 
                            onChange={handleChange} required />
                </p>
                <p>
                    <label>Majority</label><br/>
                    <input type="text" name="majority" onChange={handleChange}/>
                </p><br/>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in terms of service</span>.
                </p>
                <br/>
                <p>
                    <button id="sub_btn" type="submit" >Register</button>
                </p>
            </form>
            <footer>
            </footer>
            {registered && <Modal userName={inputs.userName} navigate={navigate} route="/"/>}
            {error.isError && <Alert messages={[error.errorMessage]} title={error.errorCode} status={"err"}/>}
        </div>
        </Fragment>
    )

}
