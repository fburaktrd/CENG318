import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import AuthContext from "../store/authContext";
import { Notification } from "../UI/Notification";


const LandingPage = () => {
  const authCtx = useContext(AuthContext);
  const userInfo =JSON.parse( localStorage.getItem("userInfo"));
  return( 
  <>
  <Navbar />
  {authCtx.firstLoginG && <Notification status="Succ" title={`Welcome ${userInfo.userName} !`} message="Deneme" disappear={true}/>}
  </>);
};

export default LandingPage;
