import React from 'react'
import { useState } from "react";

import '../App.css'

export default function SignUpPage() {

    const [inputs, setInputs] = useState({});


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
      }
    return (
        
        <div className="text-center m-5-auto">
            <h5>Create your personal account</h5>
            <form action="/home" onSubmit={handleSubmit}>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" value={inputs.username } 
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
                            onChange={handleChange} requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in terms of service</span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
            </footer>
        </div>
    )

}
