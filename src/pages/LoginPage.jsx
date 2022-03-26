import React from 'react'
import { useState } from "react";

import { Link } from 'react-router-dom'

import '../App.css'

export default function SignInPage() {

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
            <h2>Sign in</h2>
            <form action="/home" onSubmit={handleSubmit}>
                <p>
                    <label>Email</label><br/>
                    <input type="text" name="email" value={inputs.email} 
                            onChange={handleChange} required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" value={inputs.password || ""} 
                          onChange={handleChange} required />
                </p><br/>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p> <Link to="/register">Create an account</Link>.</p>
            </footer>
        </div>
    )
}
