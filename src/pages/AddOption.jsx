import React, { useState } from "react";
import SelectHour from "./SelectHour";
import { useNavigate } from "react-router-dom";

const AddOption = () => {
  const [enteredStartDate, setEnteredStartDate] = useState();
  const startDateChangeHandler = (event) => {
    setEnteredStartDate(event.target.value);
  };

  const handleSubmit = () => {};

  const navigate = useNavigate();

  const cancel = () => {
    navigate(-1);
  };

  return (
    <form
      className="sm:w-full md:w-1/2  md:mx-auto space-y-8 divide-y divide-gray-200 sm:space-y-5 divide-gray-200 mt-14 mr-20 ml-20 mb-2"
      onSubmit={handleSubmit}
    >
      <div className="pt-8">
        <h1 className="text-lg leading-6 text-xl text-gray-900 font-semibold mb-4">
          What is you recommendation ?
        </h1>
        <div className="sm:flex sm:flex-col md:grid md:grid-cols-3">
          <div className="col-span-1 sm:ml-0 md:ml-16">
            <label className="block text-sm font-medium text-gray-700 mr-2">
              Date:
            </label>
            <input
              type="date"
              name="startDate"
              value={enteredStartDate}
              onChange={startDateChangeHandler}
              className=" focus:ring-indigo-500 border focus:border-indigo-500 w-2/3 block h-8  rounded-md sm:text-sm border-gray-300"
              placeholder="startDate"
            />
          </div>
          <div className="col-span-1 sm:ml-0 md:ml-16">
            <label className="block text-sm font-medium text-gray-700">
              Start Time:
            </label>
            <SelectHour name="Start Time" keyy={"startTime"} />
          </div>
          <div className="col-span-1 sm:ml-0 md:ml-16">
            <label className="block text-sm font-medium text-gray-700">
              Finish Time:
            </label>
            <SelectHour name="Finish Time" keyy={"endTime"} />
          </div>
        </div>
        <div className="flex justify-center mt-4 ml-24">
          <button
            className="flex justify-center py-1 px-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit"
          >
            Add Option
          </button>
          <button
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-white-700 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="button"
            onClick={cancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddOption;
