import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import AuthContext from "../store/authContext";
import { Notification } from "../UI/Notification";
import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  const onClickHandler = () => {
    <Link to="/eventPage"> </Link>;
  };
  const event = [
    {
      title: "Hadi Sinemaya Gidelim",
      options: 3,
      participant: 3,
    },
    {
      title: "Hadi Futbol Oynayalım",
      options: 5,
      participant: 14,
    },
    {
      title: "Hadi Kahve İçelim",
      options: 4,
      participant: 4,
    },
    // More event...
  ];
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <>
      <Navbar/>
      {props.firstLoginG && (
        <Notification
          status="Succ"
          title={`Welcome ${userInfo.userName} !`}
          message="Deneme"
          disappear={true}
        />
      )}
      {props.isLogged ? (
        <div>
          <div className="py-10">
            <header>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold leading-tight text-gray-900"></h1>
              </div>
            </header>
            <main>
              <div className="max-w-2xl mx-auto sm:px-8 lg:px-16">
                <div className="px-4 py-8 sm:px-0">
                  <div className=" flex justify-around">
                    <Link to="/createPoll">
                      <button className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-700 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Create Poll
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300 mr-8 ml-8" />
                </div>
                <div className="relative flex justify-center">
                  <span className="px-3 bg-white text-lg font-medium text-gray-900">
                    Events and Meetings
                  </span>
                </div>
              </div>
              <ul
                role="list"
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 container"
              >
                {event.map((event, index) => (
                  <li
                    key={index}
                    className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 cursor-pointer"
                  >
                    <EventCard items={event} />
                  </li>
                ))}
              </ul>
            </main>
          </div>
        </div>
      ) : (
        <div> you are not logged</div>
      )}
    </>
  );
};

export default HomePage;
