import React, { useContext } from "react";
import NavLogo from "../components/NavLogo.png";
import { Link } from "react-router-dom";
import AuthContext from "../store/authContext";
import { Disclosure } from "@headlessui/react";

const Navbar = (props) => {
  const authCtx = useContext(AuthContext);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const navigation = [
    { name: "Home", to: "/", current: true },
    { name: "Team", to: "/teamPage", current: false },
    { name: "???", to: "#", current: false },
    { name: "???", to: "#", current: false },
  ];

  const unAuthorized = [
    <div>
      <Link to="/registerPage">
        <button className="inline-flex items-center px-3 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-700 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Sign Up
        </button>
      </Link>
      &nbsp;
      <Link to="/loginPage">
        <button className="inline-flex items-center px-3 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-700 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Login
        </button>
      </Link>
    </div>,
  ];

  const authorized = [
    <button
      onClick={() => {
        authCtx.onLogout();
        props.setLogged(false);
      }}
      className="inline-flex items-center px-3 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-900 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Logout
    </button>,
  ];
  return (
    <Disclosure as="nav" className="bg-white-800 border-b-2">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="hidden lg:block h-8 w-auto"
                src={NavLogo}
                alt="SchedulEasy"
              />
            </div>
            <div className="hidden sm:block sm:ml-8">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="text-black-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="my-2.5">
            {!authCtx.isLoggedIn && unAuthorized}
            {authCtx.isLoggedIn && authorized}
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

export default Navbar;
