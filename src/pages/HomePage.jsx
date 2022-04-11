import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import AuthContext from "../store/authContext";
import { Notification } from "../UI/Notification";
import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";
import { DatabaseHandler } from "../database/DatabaseHandler";
import Banner from "../UI/Banner";

const HomePage = (props) => {
  // too many renders!
  const onClickHandler = () => {
    <Link to="/eventPage"> </Link>;
  };

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  let counter = 0;
  useEffect(async () => {
    const result = DatabaseHandler.getUserEventInfos(userInfo.userName);
    (await result).forEach((event) =>
      event.then((res) => setEvents((prev) => [...prev, res]))
    );
    setLoading(false);
  }, []);

  return (
    <>
      <Navbar />

      {props.showGreetingMessage && userInfo !== null && (
        <Notification
          status="Succ"
          title={`Welcome ${userInfo.userName} !`}
          message="Deneme"
          disappearEvents={[true, props.setShowGreetingMessage]}
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
                  <div className="flex justify-around">
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
                <div className="relative flex justify-center mb-4">
                  <span className="px-3 bg-white text-lg font-medium text-gray-900">
                    Events and Meetings
                  </span>
                </div>
              </div>

              {loading ? (
                <div className="max-w-2xl mx-auto sm:px-8 lg:px-16">
                  <div className="px-4 py-8 sm:px-0">
                    <div className="flex justify-center ml-2 mt-16">
                      <button
                        disabled
                        type="button"
                        class="text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-4 text-center mr-2 dark:bg-blue-600  dark:focus:ring-blue-800 inline-flex items-center"
                      >
                        <svg
                          role="status"
                          class="inline mr-3 w-6 h-6 text-white animate-spin"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor"
                          />
                        </svg>
                        Your events/meetings loading...
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 container"
                >
                  {events.map((event, index) => (
                    <li
                      key={index}
                      className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 cursor-pointer"
                    >
                      <EventCard items={event} />
                    </li>
                  ))}
                </ul>
              )}
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
