import React, { useContext } from "react";

import { Link } from "react-router-dom";
import AuthContext from "../store/authContext";
import "./Navbar.css";





const Navbar = () => {
  const authCtx= useContext(AuthContext);
  
  const unAuthorized = [
    <Link to="/register">
      <button className="inline-flex items-center px-3 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-900 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Sign Up
      </button>
      &nbsp;
      <Link to="/login">
        <button className="inline-flex items-center px-3 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-900 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Login
        </button>
      </Link>
    </Link>];

  const authorized = [
    <button onClick={()=>{
      authCtx.onLogout();
      
    }} className="inline-flex items-center px-3 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-900 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    Logout
    </button>];
  return (
    <>
      <nav className="navbar ">
        <div to="/" className="navbar-logo">
          LOGO KOYULACAK
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              ???
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              ???
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Contact
            </Link>
          </li>
          <div className="my-2.5">
          {!authCtx.isLoggedIn && unAuthorized}
          {authCtx.isLoggedIn && authorized}
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
