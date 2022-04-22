import React, { useState } from "react";

import { CheckIcon, XIcon, QuestionMarkCircleIcon} from "@heroicons/react/solid";


export default function VoteDateOption({ func, optInfo }) {
  // console.log(optInfo,"eventPage")

  const [yesVote, setYesVote] = useState(0);
  const [NoVote, setNoVote] = useState(0);
  const [ifNeedBe , setIfNeedBe] = useState(0);

  const [yesClicked, setYesClicked] = useState(false);
  const [NoClicked, setNoClicked] = useState(false);
  const [ifNeedBeClicked, setIfNeedBeClicked] = useState(false);

  

  const voteHandler = (prevVote) => {
    setYesVote((prevVote) => {
      if (yesClicked === true) {
        setYesClicked(false);
        return [parseInt(prevVote) - 1];
      } else {
        setYesClicked(true);
        return [parseInt(prevVote) + 1];
      }
    });

  };

  const ifNeedBeVoteHandler = (prevVote) => {
    if (ifNeedBeClicked === true) {
      setIfNeedBeClicked(false);
      return [parseInt(prevVote) - 1];
    }
    else {
      setIfNeedBeClicked(true);
      return [parseInt(prevVote) + 1];
    }
  }

  const noVoteHandler = (prevVote) => {
    setNoVote((prevVote) => {
      if (NoClicked === true) {
        setNoClicked(false);
        return [parseInt(prevVote) - 1];
      } else {
        setNoClicked(true);
        return [parseInt(prevVote) + 1];
      }
    });

  };



  const a = () => {
    func(optInfo);
  };
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <span className="px-3 bg-white text-lg font-medium text-gray-900">
        Date Options{" "}
      </span>
        <li
          className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 mt-4"
        >
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {optInfo.id}
                </span>
              </div>
              <p className="mt-1 text-gray-500 text-sm truncate">
                {optInfo.date}
              </p>
              <p className="mt-1 text-gray-500 text-sm truncate">
                {optInfo.startTime} - {optInfo.endTime}
              </p>
              <div className="flex items-center space-x-3">
                <CheckIcon className="w-5 h-5 text-green-400" /> {yesVote}
              </div>
              <div className="flex items-center space-x-3">
                <XIcon className="w-5 h-5 text-red-400" /> {NoVote}
              </div>
              <div className="flex items-center space-x-3">
                <QuestionMarkCircleIcon className="w-5 h-5 text-yellow-400" /> {ifNeedBe}
              </div>
            </div>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                {yesClicked === true ? (
                  <button
                    onClick={voteHandler}
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-green-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                  >
                    <CheckIcon
                      className="w-7 h-7 text-green-400"
                      aria-hidden="true"
                    />
                  </button>
                ) : (
                  <button
                    onClick={voteHandler}
                    disabled={NoClicked || ifNeedBeClicked}
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                  >
                    <CheckIcon
                      className="w-7 h-7 text-gray-400"
                      aria-hidden="true"
                    />
                  </button>
                )}
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                {NoClicked === true ? (
                  <button
                    onClick={noVoteHandler}
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-red-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                  >
                    <XIcon
                      className="w-7 h-7 text-red-400"
                      aria-hidden="true"
                    />
                  </button>
                ) : (
                  <button
                    onClick={noVoteHandler}
                    disabled={yesClicked || ifNeedBeClicked}
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                  >
                    <XIcon
                      className="w-7 h-7 text-gray-400"
                      aria-hidden="true"
                    />
                  </button>
                )}
                </div>
                <div className="-ml-px w-0 flex-1 flex">
                {ifNeedBeClicked === true ? (
                  <button
                    onClick={ifNeedBeVoteHandler}
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-green-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                  >
                    <QuestionMarkCircleIcon
                      className="w-7 h-7 text-yellow-400"
                      aria-hidden="true"
                    />
                  </button>
                ) : (
                  <button
                    onClick={ifNeedBeVoteHandler}
                    disabled={NoClicked || yesClicked}
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                  >
                    <QuestionMarkCircleIcon
                      className="w-7 h-7 text-gray-400"
                      aria-hidden="true"
                    />
                  </button>
                )}
              </div>
            </div>
          </div>
        </li>
      )
    </ul>
  );
}
