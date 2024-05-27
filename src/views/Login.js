import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { AppContext } from "../context/AppContext";


const Login= () =>{

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const {setUser, setToken}=useContext(AppContext);

    const onSubmit = (e)=>{
        e.preventDefault();
        //console.log('Logeando...');

        axiosClient.post('/login', {email:email, password:password})
        .then(({data})=>{
            console.log(data);
            setUser(data.user);
            setToken(data.token);
        })
    }
    
    return(
                <form onSubmit={onSubmit}>
                    <h1 className="title">Login into your account</h1>
                    <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Email"/>
                    <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password"/>
                    <button className="btn btn-block">Login</button>
                    <p className="message">
                        Not Registered? <Link to="/signup">Create an account</Link>
                    </p>
                </form>
    );
    
}

export default Login;