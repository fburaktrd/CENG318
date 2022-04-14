import React from "react";
import { Link } from "react-router-dom";

const EventCard = (props) => {
  return (
    <div className="border">
      <Link to={"/eventPage"+"/"+props.event.id} state={props}>
        <button className="w-full flex items-center justify-between mt-2">
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1 truncate">
              <div className="flex flex-col items-center space-x-3">
                <h3 className="text-gray-900 text-sm font-medium truncate">
                  {props.event.title}
                </h3>
                <h3 className="flex text-gray-900 text-sm font-medium truncate">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {Object.keys(props.event.participants).length}
                </h3>
                <h3 className="flex text-gray-900 text-sm font-medium truncate">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {props.event.options.length}
                </h3>
              </div>
            </div>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default EventCard;
