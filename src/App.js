import React, { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import TeamPage from "./pages/TeamPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventPage from "./pages/EventPage";

export default function App() {
  const [isLogged, setLogged] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LandingPage isLogged={isLogged} setLogged={setLogged} />}
        />
        <Route
          path="/loginPage"
          element={<LoginPage isLogged={isLogged} setLogged={setLogged} />}
        />
        <Route
          path="/registerPage"
          element={<RegisterPage isLogged={isLogged} setLogged={setLogged} />}
        />
        <Route
          path="/forgetPasswordPage"
          element={
            <ForgetPasswordPage isLogged={isLogged} setLogged={setLogged} />
          }
        />
        <Route
          path="/teamPage"
          element={<TeamPage isLogged={isLogged} setLogged={setLogged} />}
        />
        <Route
          path="/eventPage"
          element={<EventPage isLogged={isLogged} setLogged={setLogged} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
