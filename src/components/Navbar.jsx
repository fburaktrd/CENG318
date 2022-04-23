import React, { useContext } from "react";
import NavLogo from "../components/NavLogo.png";
import { Link } from "react-router-dom";
import AuthContext from "../store/authContext";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const authCtx = useContext(AuthContext);

  const navigation = [
    { name: "Home", to: "/", current: true },
    { name: "Team", to: "/teamPage", current: false },
    { name: "???1", to: "#", current: false },
    { name: "???2", to: "#", current: false },
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
      }}
      className="inline-flex items-center px-3 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-700 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Logout
    </button>,
  ];
  return (
    <Disclosure as="nav" className="bg-white border-b">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto ml-24"
                    src={NavLogo}
                    alt="SchedulEasy"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src={NavLogo}
                    alt="SchedulEasy"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={
                          "text-black-300 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                        }
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

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  as="a"
                  to={item.to}
                  className={
                    "bg-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  }
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
