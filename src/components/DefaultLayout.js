import React, { useContext, useEffect } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axiosClient from "../axios-client";


const DefaultLayout= () =>{

   const {user, token, setUser, setToken}=useContext(AppContext);

   if(!token){

    return <Navigate to="/login" />
 }


    const onLogout= (e)=>{
        e.preventDefault();

        axiosClient.post('/logout')
        .then(()=>{
            setUser({});
            setToken(null)
        })
        
    }
    

    return(
        <div id="defaultLayout">
            <aside>
                <Link to="/dashboards">Dashboards</Link>
                <Link to="/users">Users</Link>
            </aside>
            <div className="content">
                <header>
                    <div>
                        Header
                    </div>
                    <div>
                        {user.name}
                        <a onClick={onLogout} className="btn-logout">Logout</a>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>    
            </div>       
        </div>
    );
    
}

export default DefaultLayout;