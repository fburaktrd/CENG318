import React, { useContext, useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import TeamPage from "./pages/TeamPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventPage from "./pages/EventPage";
import AuthContext from "./store/authContext";
import CreatePoll from "./pages/CreatePoll";
import { auth } from "./database/firebase-config";
import SelectHour from "./pages/SelectHour";
export default function App() {
  const authCtx = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              isLogged={authCtx.isLoggedIn}
              showGreetingMessage={authCtx.showGreetingMessage}
              setShowGreetingMessage={authCtx.setShowGreetingMessage}
            />
          }
        />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/registerPage" element={<RegisterPage />} />
        <Route path="/forgetPasswordPage" element={<ForgetPasswordPage />} />
        <Route path="/teamPage" element={<TeamPage />} />
        <Route
          path="/eventPage/:id"
          element={<EventPage isLogged={authCtx.isLoggedIn} />}
        />
        <Route
          path="/createPoll"
          element={<CreatePoll isLogged={authCtx.isLoggedIn} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
