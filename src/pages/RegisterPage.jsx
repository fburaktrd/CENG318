import React, { Fragment, useContext } from "react";
import { useState } from "react";
import { auth } from "../database/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import logo from "../components/Logo.png";
import "../App.css";
import Alert from "../UI/Alert";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { DatabaseHandler } from "../database/DatabaseHandler";
import AuthContext from "../store/authContext";
import Modal from "../UI/Modal";

export default function SignUpPage() {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState({ isError: false });
  const [registered, setRegistered] = useState(false);
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const validateInput = (event) => {
    let { name, value } = event.target;
    
   
      switch (name) {
        case "userName":
          if (!value) {
            setError({ isError: true, errorMessage:"Please enter username"});
          }
          break;
        case "email":
          if (!value) {
            setError({ isError: true, errorMessage:"Please enter email"});
          }
          break;
          case "birthDate":
            if (!value) {
              setError({ isError: true, errorMessage:"Please enter birthdate"});
            }
            break;
        case "password":
          if (!value) {
            setError({ isError: true, errorMessage:"Please enter password"});
          } else if (inputs.confirmPassword && value !== inputs.confirm_password) {
            setError({ isError: true, errorMessage:"Password and Confirm Password does not match."});
          } 
          break;
   
        case "confirm_password":
          if (!value) {
            setError({ isError: true, errorMessage:"Password and Confirm Password does not match."});
          } else if (inputs.password && value !== inputs.password) {
            setError({ isError: true, errorMessage:"Password and Confirm Password does not match."});
          }
          break;
   
        default:
          break;
      }
       
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, userName, majority, birthDate } = inputs;
    console.log(email, userName, majority, birthDate);

    createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(userCredential, user);
        DatabaseHandler.registerUserData(
          user.uid,
          userName,
          email,
          birthDate,
          majority
        );
        setRegistered(true);
        localStorage.setItem("uid", user.uid);
        authCtx.onLogin(user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        setError({
          isError: true,
          errorMessage: errorMessage,
          errorCode: errorCode,
        });
      });

     
    console.log(inputs);
  };
  return (
    <Fragment>
      <Navbar />
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-50 w-72" src={logo} alt="logo" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign up to SchedulEasy
            </h2>
          </div>

          <form
            className="mt-8 space-y-6"
            action="/home"
            onSubmit={handleSubmit}
          >
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label className="sr-only">Username</label>
                <input
                  type="text"
                  name="userName"
                  value={inputs.userName}
                  onChange={handleChange}
                  onBlur={validateInput}
                  required
                  className="appearance-none rounded-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              {error.userName && <span className='err'>{error.userName}</span>}
              <div>
                <label className="sr-only">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={inputs.email || ""}
                  onChange={handleChange}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label className="sr-only">Password</label>
                <input
                  type="password"
                  name="password"
                  value={inputs.password || ""}
                  onChange={handleChange}
                  onBlur={validateInput}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label className="sr-only">Password</label>
                <input
                  type="password"
                  name="confirm_password"
                  value={inputs.confirm_password || ""}
                  onChange={handleChange}
                  onBlur={validateInput}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password Again"
                />
              </div>
              <div>
                <label className="sr-only">Date of Birth</label>
                <input
                  type="date"
                  name="birthDate"
                  value={inputs.birthDate || ""}
                  onChange={handleChange}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Date of birth"
                />
              </div>
              <div>
                <label className="sr-only">Majority</label>
                <input
                  type="text"
                  name="majority"
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 rounded-b-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Majority"
                />
              </div>
            </div>
            &nbsp;
            <input type="checkbox" name="checkbox" id="checkbox" required />
            &nbsp;
            <span>I agree all statements in terms of service</span>.
            <div>
              <button
                id="sub_btn"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                type="submit"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-5"></span>
                Sign up
              </button>
            </div>
          </form>
          <footer></footer>
          {registered && (
            <Modal userName={inputs.userName} navigate={navigate} route="/" />
          )}
          {error.isError && (
            <Alert
              messages={[error.errorMessage]}
              title={error.errorCode}
              status={"err"}
            />
          )}
        </div>
      </div>
    </Fragment>
  );
}
