import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import App from "./App";
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import ForgetPasswordPage from './components/ForgetPasswordPage'

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={ <LoginPage/> } />
        <Route path="/register" element={ <RegisterPage/> } />
        <Route path="/forget-password" element={ <ForgetPasswordPage/> } />
    </Routes>
  </BrowserRouter>,
  rootElement
);
