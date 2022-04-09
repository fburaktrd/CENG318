import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import SelectHour from "./SelectHour"

const events = [
  {
    id: 1,
    color: "#fd3153",
    from: "2019-05-02T18:00:00+00:00",
    to: "2019-05-05T19:00:00+00:00",
    title: "This is an event",
  },
  {
    id: 2,
    color: "#1ccb9e",
    from: "2019-05-01T13:00:00+00:00",
    to: "2019-05-05T14:00:00+00:00",
    title: "This is another event",
  },
  {
    id: 3,
    color: "#3694DF",
    from: "2019-05-05T13:00:00+00:00",
    to: "2019-05-05T20:00:00+00:00",
    title: "This is also another event",
  },
];

const CreatePoll = () => {
  const navigate = useNavigate();

  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const [enteredDescription, setEnteredDescription] = useState("");
  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const [enteredLocation, setEnteredLocation] = useState("");
  const LocationChangeHandler = (event) => {
    setEnteredLocation(event.target.value);
  };

  const [cb1, setCB1] = useState(false);
  const CB1ChangeHandler = (event) => {
    if (cb1 === false) {
      setCB1(true);
    } else {
      setCB1(false);
    }
  };

  const [enteredLimit, setEnteredLimit] = useState("");
  const limitChangeHandler = (event) => {
    if (event.target.value === 0) {
    }
    setEnteredLimit(Number(event.target.value));
  };

  const [enteredParticipants, setEnteredParticipants] = useState({});
  const participantsChangeHandler = (event) => {
    let string = event.target.value;
    const array = string.split(",");
    //console.log(array);
    setEnteredParticipants({ ...array });
  };

  const [cb2, setCB2] = useState(false);
  const CB2ChangeHandler = (event) => {
    if (cb2 === false) {
      setCB2(true);
    } else {
      setCB2(false);
      setEnteredLimit("");
    }
  };

  const [cb3, setCB3] = useState(false);
  const CB3ChangeHandler = (event) => {
    if (cb3 === false) {
      setCB3(true);
    } else {
      setCB3(false);
    }
  };

  const cancelCreate = () => {
    navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let poll = {
      title: enteredTitle,
      description: enteredDescription,
      location: enteredLocation,
      checkBox1: cb1,
      checkBox2: cb2,
      limit: enteredLimit,
      checkBox3: cb3,
      participants: enteredParticipants,
    };
    console.log(poll);
  };

  return (
    <div>
      <Navbar />

      <form
        className="space-y-8 divide-y mr-96 mb-2 ml-96 mt-10 divide-gray-200"
        onSubmit={handleSubmit}
      >
        <h1 className="text-lg leading-6 text-xl text-gray-900 font-semibold">
          Create Group Poll
        </h1>
        <div className="space-y-8 divide-y divide-gray-200">
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label
                htmlFor="Title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  name="title"
                  id="title"
                  required
                  value={enteredTitle}
                  onChange={titleChangeHandler}
                  className="flex-1 focus:ring-indigo-500 border focus:border-indigo-500 block w-full h-8 min-w-0 rounded-md sm:text-sm border-gray-300"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="Description"
                className="block text-sm font-medium text-gray-700"
              >
                Description (optional)
              </label>
              <div className="mt-1">
                <textarea
                  id="Description"
                  name="Description"
                  rows={3}
                  value={enteredDescription}
                  onChange={descriptionChangeHandler}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Write a few sentences about event.
              </p>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="Title"
                className="block text-sm font-medium text-gray-700"
              >
                Location (optional)
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={enteredLocation}
                  onChange={LocationChangeHandler}
                  className="flex-1 focus:ring-indigo-500 border h-8 focus:border-indigo-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="Title"
                className="block text-sm font-medium text-gray-700"
              >
                Participants
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  name="partcpnts"
                  id="partcpnts"
                  onChange={participantsChangeHandler}
                  className="flex-1 focus:ring-indigo-500 border focus:border-indigo-500 block w-full h-8 min-w-0 rounded-md sm:text-sm border-gray-300"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <label>Start Time:</label>
          <SelectHour time="Start Time"/>

          <label>Finish Time:</label>
          <SelectHour time="Finish Time"/>
        </div>

        <div className="pt-8">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Settings
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Set your event options.
            </p>
          </div>
          <div>
            <fieldset>
              <div className="mt-4 space-y-4">
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="???"
                      name="checkbox"
                      type="checkbox"
                      onChange={CB1ChangeHandler}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="???" className="font-medium text-gray-700">
                      ???
                    </label>
                    <p className="text-gray-500">???</p>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="limitCheckBox"
                      name="limitCheckBox"
                      type="checkbox"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      onChange={CB2ChangeHandler}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="limit"
                      className="font-medium text-gray-700"
                    >
                      Limit how many participants can select a time
                    </label>
                    {cb2 && (
                      <input
                        type="number"
                        name="limit"
                        id="limit"
                        value={enteredLimit}
                        required
                        onChange={limitChangeHandler}
                        className="flex-1 focus:ring-indigo-500 border focus:border-indigo-500 block w-16 min-w-0 rounded-md sm:text-sm border-gray-300"
                      />
                    )}
                    <p className="text-gray-500">
                      We'll remove a time when it hits the participant limit.
                    </p>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="participants"
                      name="participants"
                      type="checkbox"
                      onChange={CB3ChangeHandler}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="participants"
                      className="font-medium text-gray-700"
                    >
                      Hide participant list
                    </label>
                    <p className="text-gray-500">
                      Get notified when a candidate accepts or rejects an offer.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>

        <div className="pt-2">
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={cancelCreate}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Poll
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePoll;
