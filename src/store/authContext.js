import React,{useState,useEffect} from "react";
import { signOut } from "firebase/auth";
import { auth } from "../database/firebase-config";


const AuthContext = React.createContext({
    isLoggedIn: false,
    firstLoginG: false,
    onLogout: () => {},
    onLogin: () => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [firstLoginG,setFirstLoginG] = useState(false);
    useEffect(()=>{
        const uid = localStorage.getItem("uid")
        if(uid !== undefined && uid !== null){
            setIsLoggedIn(true);
        }
    },[]);
    const logoutHandler = () => {
        signOut(auth);
        console.log(auth,"Logged out.");
        localStorage.removeItem("uid");
        localStorage.removeItem("userInfo");
        setIsLoggedIn(false);
        setFirstLoginG(false);
    };

    const loginHandler = () => {
        setIsLoggedIn(true);
        setFirstLoginG(true);
    };
    return(<AuthContext.Provider value= {{isLoggedIn:isLoggedIn, firstLoginG:firstLoginG,onLogout:logoutHandler, onLogin:loginHandler}}>{props.children}</AuthContext.Provider>)
};

export default AuthContext;