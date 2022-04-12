import React, { useState } from "react";
import TimeKeeper from "react-timekeeper";

function SelectHour({name,timeHandler,keyy}) {
  const date = new Date();
  const [time, setTime] = useState("12:30");
  const [showTime, setShowTime] = useState(false);

  const timeFunction = () => {
    setShowTime(false);
    let selected = {};
    selected[keyy] = time;
    timeHandler(selected);
  };

  return (
    <div>
      {showTime && (
        <TimeKeeper
          time={time}
          onChange={(newTime) => setTime(newTime.formatted12)}
          onDoneClick={timeFunction}
          switchToMinuteOnHourSelect
        />
      )}

      {!showTime && (
        <button
          className="border rounded-md w-52"
          onClick={() => setShowTime(true)}
        >
          <span className="">{time}</span>
        </button>
      )}
    </div>
  );
}
export default SelectHour;
