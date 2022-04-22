import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import OptionsCard from "../components/OptionsCard";
import VoteDateOption from "../components/VoteDateOptionCard";

const EventPage = (props) => {
  const { id } = useParams();
  const eventInfo = useLocation().state["event"];
  eventInfo.options.map((opt, index) => (opt["id"] = index));
  let votedOptions = {};

  const VotedOptionsHandler = (option) => {
    console.log(option);
    votedOptions[option.id] = "asdasd";
  };
  return (
    <div>
      <Navbar />
      <div className="bg-white shadow overflow-hidden sm:rounded-lg mr-16 ml-16 mt-10 mb-10">
        <div className="px-4 py-4 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-black-900">
            {eventInfo.title}
          </h3>
        </div>
        <div className="border-t border-gray-200 sm:p-0 md:p-4 -mb-1">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 px-2">
              <dt className="text-sm flex mb-3 font-medium text-black-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Creator
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {eventInfo.creatorName}
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 px-2">
              <dt className="text-sm flex font-medium text-black-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Location
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                İzmir
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 px-2">
              <dt className="text-sm flex font-medium text-black-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
                Description
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {eventInfo.description}
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 px-2">
              <div className="flex mt-8">Availabilities</div>
              <div>
                <span className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="Green"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Yes
                </span>
                <span className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="orange"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  if need be
                </span>
                <span className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="Red"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  cannot attend
                </span>
              </div>
            </div>
            {/* <ul
              role="list"
              className="flex justify-end gap-6 sm:grid-cols-2 lg:grid-cols-3 container"
            >
              <OptionsCard option={eventInfo} />
            </ul>
            {Object.keys(eventInfo.participants).map((participant, index) => (
              <div key={index}>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  {participant}
                  <input type="checkbox"></input>
                </div>
              </div>
            ))} */}
          </dl>
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-white text-lg font-medium text-gray-900">
                Options
              </span>
            </div>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 rounded-lg divide-gray-200">
            {eventInfo.options.map((option) => (
              <VoteDateOption
                key={option.id}
                func={VotedOptionsHandler}
                optInfo={option}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
