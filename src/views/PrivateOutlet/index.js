import { TryOutlined } from "@mui/icons-material";
import React, {useContext} from "react"
import {Outlet, Navigate} from "react-router-dom"
import {UserContext} from "../../components/context/UserContext"
import Navbar from "../../components/Navbar";
import Home from "../Home";

function PrivateOutlet() {

    const userContext= useContext(UserContext);


    if(userContext === undefined) {
        return(<><Navbar log={true}/></>)
    }
    else{
    return (
        <>
            <Navbar log={true}/>
            <Outlet />
        </>
    )}
}

export default PrivateOutlet;