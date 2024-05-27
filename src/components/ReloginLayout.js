import React, { useContext } from "react";
import {Navigate, Outlet } from "react-router-dom";
import { AppContext } from "../context/AppContext";



const ReloginLayout= () =>{

    const {token}= useContext(AppContext);

    if(token){

        return <Navigate to="/" />
    }

    return(
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <Outlet />
            </div>
        </div>
    );
    
}

export default ReloginLayout;