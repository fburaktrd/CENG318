import React, { useState } from "react";
import TimeKeeper from "react-timekeeper";

function SelectHour(props) {
  const date = new Date();
  const [time, setTime] = useState("12:30");
  const [showTime, setShowTime] = useState(false);

  const timeFunction = () => {
    setShowTime(false);
    props.timeHandler(time);
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
