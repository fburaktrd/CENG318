import React, { useState } from "react";

const users = [
  "ali",
  "ahmet",
  "mehmet",
  "ayşe",
  "göktürk",
  "burak",
  "öykü",
  "nadir",
  "çağatay",
];

const addedUsers = ["ali", "ahmet", "mehmet", "ayşe"];

const Addfriend = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      users.includes(enteredUsername) &&
      addedUsers.includes(enteredUsername)
    ) {
      console.log("You are already friends");
    } else if (!users.includes(enteredUsername)) {
      console.log("There is no such user.");
    } else if (
      users.includes(enteredUsername) &&
      !addedUsers.includes(enteredUsername)
    ) {
      console.log("Request Sent");
    }
  };

  return (
    <form
      className="sm:w-full md:w-1/2  md:mx-auto space-y-8 divide-y divide-gray-200 sm:space-y-5 divide-gray-200 mr-20 ml-20 mt-36"
      onSubmit={handleSubmit}
    >
      <div className="space-y-8 divide-y divide-gray-200">
        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div className="sm:col-span-6">
            <label
              htmlFor="Add Friend"
              className="block text-sm font-medium text-gray-700"
            >
              Add Friend
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="text"
                name="title"
                id="title"
                required
                value={enteredUsername}
                onChange={usernameChangeHandler}
                className="flex-1 focus:ring-indigo-500 border focus:border-indigo-500 block w-full h-8 min-w-0 rounded-md sm:text-sm border-gray-300"
              />
            </div>
          </div>
        </div>

        <div className="pt-2">
          <div className="flex justify-end">
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Request
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Addfriend;
