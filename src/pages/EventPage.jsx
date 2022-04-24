import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import VoteDateOption from "../components/VoteDateOptionCard";
import { DatabaseHandler } from "../database/DatabaseHandler";
import Banner from "../UI/Banner";

const EventPage = (props) => {
  //const { station } = useParams();
  const eventInfo = useLocation().state["event"];
  eventInfo.options.map((opt, index) => (opt["id"] = index));
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [votes,setVotes] = useState({comings:[],Ncomings:[],ifNeed:[]})
  const [loading,setLoading] = useState(true)
  let selectedDates = {};

  useEffect(async ()=>{
    const rVotes = await DatabaseHandler.getVotes(eventInfo.id);
    setVotes(rVotes);
    setLoading(false);
    // const {comings,Ncomings,ifNeed} = result;
    // console.log(comings,Ncomings,ifNeed);
  },[])
  const selectedDatesHandler = (optId, status) => {
    selectedDates[optId] = status;
  };

  const submitHandler = () => {
    DatabaseHandler.submitVote(eventInfo.id,userInfo.userName,selectedDates);
    //modal çıkartılabilir.
    window.location.reload();
    console.log(userInfo.userName,selectedDates);
  };
  return (
    <div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-4 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-black-900">
            {eventInfo.title}
          </h3>
        </div>
        <div className="border-t border-gray-200 sm:p-0 md:p-4 mb-2">
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
                {eventInfo.location}
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
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="Orange"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
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
                <span className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="darkgray"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  pending
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
          {loading ? (
                <Banner message={"Options are loading..."} />
              ) : (
                <div className="grid sm:grid-cols-1 md:grid-cols-3 rounded-lg divide-gray-200">
            {eventInfo.options.map((option) => (
              <VoteDateOption
                userName={userInfo.userName}
                comings={votes["comings"][option.id]}
                Ncomings={votes["Ncomings"][option.id]}
                ifNeed={votes["ifNeed"][option.id]}
                key={option.id}
                handleSelectedDates={selectedDatesHandler}
                optInfo={option}
              />
            ))}
          </div>
              )}
          
          <div className="flex justify-center">
            <button
              onClick={submitHandler}
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-700 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
