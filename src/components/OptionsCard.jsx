import React from "react";

const OptionsCard = (props) => {
  const indexOption = [
    <div>
      <h3 className="text-gray-900 text-sm font-medium truncate">
        {props.option.options[1].date}
      </h3>
      <h3 className="flex justify-center text-gray-900 text-sm font-medium truncate">
        {props.option.options[1].startTime}
      </h3>
      <h3 className="flex justify-center text-gray-900 text-sm font-medium truncate">
        {props.option.options[1].endTime}
      </h3>
    </div>,
  ];
  return (
    <div>
      <div>
        <div className="flex1">
          <div className="flex justify-center">{indexOption}</div>
        </div>
      </div>
    </div>
  );
};

export default OptionsCard;
