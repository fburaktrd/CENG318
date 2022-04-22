import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { LockClosedIcon } from "@heroicons/react/solid";
import logo from "../components/Logo.png";
import Navbar from "../components/Navbar";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth, provider } from "../database/firebase-config";
import AuthContext from "../store/authContext";
import { DatabaseHandler } from "../database/DatabaseHandler";
import Alert from "../UI/Alert";

const initialError = {
  isError: false,
  errorCode: "",
  errorMessages: [],
};

export default function SignInPage(props) {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState(initialError);

  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    signInWithEmailAndPassword(auth, inputs.email, inputs.password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        const userName = await DatabaseHandler.getUserName(user.uid); // Critical ! I should look again. undefined
        console.log(userName);
        localStorage.setItem("uid", user.uid);
        localStorage.setItem(
          "userInfo",
          JSON.stringify({ email: user.email, userName: userName })
        );
        authCtx.onLogin();

        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setError((error) => ({
          isError: true,
          errorCode: errorCode,
          errorMessages: [...error.errorMessages, errorMessage],
        }));
        console.log(errorCode, errorMessage);
      });
  };

  const googleHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user, user.uid);
        localStorage.setItem("uid", user.uid);
        localStorage.setItem(
          "userInfo",
          JSON.stringify({
            email: user.email,
            userName: user.displayName,
          })
        );
        authCtx.onLogin();
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-50 w-72" src={logo} alt="logo" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            action="/home"
            onSubmit={handleSubmit}
          >
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label className="sr-only">Email address</label>
                <input
                  type="text"
                  name="email"
                  value={inputs.email}
                  onChange={handleChange}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            {error.isError && (
              <Alert
                title={error.errorCode}
                status="err"
                messages={error.errorMessages}
              />
            )}
            <div className="flex items-center justify-between">
              <div className="flex items-center"></div>
              <div className="text-sm">
                <Link to="/forget-password">
                  <label className="font-medium text-blue-700 hover:text-blue-500">
                    Forgot password?
                  </label>
                </Link>
              </div>
            </div>

            <div>
              <button
                id="sub_btn"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                type="submit"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-5">
                  <LockClosedIcon
                    className="h-7 w-7 text-blue-500 group-hover:text-blue-700"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
              <br />
              <button
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                type="button"
                onClick={googleHandler}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-5">
                  <img
                    src="https://img.icons8.com/ios-filled/30/000000/google-logo.png"
                    alt="google icon"
                  />
                </span>
                Continue with Google
              </button>
              <br />
              <div className="text-center text-1xl  text-gray-900">
                Don't have an account yet? &nbsp;
                <Link
                  to="/registerPage"
                  className="font-medium text-blue-700 hover:text-blue-500"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
