import React from "react";
import { useParams, useLocation } from "react-router-dom";

const EventPage = (props) => {
  const {id} = useParams();
  const eventInfo = useLocation().state["event"];
  console.log(eventInfo)
  return (
  <div>
  <h3>{eventInfo.title}</h3>
  <ul>
    {Object.keys(eventInfo.participants).map((participant,index)=> <li key={index}>
      <p> Welcome {participant}!</p>
    </li>)}
  </ul>
  
  </div>);
};

export default EventPage;
