import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { AppContext } from "../context/AppContext";





const Signup= () =>{

    const [name, setName]= useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    
    const {setUser, setToken}=useContext(AppContext);


    const onSubmit = (e)=>{

        e.preventDefault();

        axiosClient.post('/signup', {name:name, email:email, password:password})
       .then(({data})=>{
            console.log(data);
            setUser(data.token);
            setToken(data.user);
       })

       
    }

    return(
             <form onSubmit={onSubmit}>
                <h1 className="title">Signup for free</h1>
                 <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Full name"/>
                 <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Email address"/>
                 <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password"/>
                 <input type="password" placeholder="Password confirmation"/>
                 <button className="btn btn-block">Signup</button>
                 <p className="message">
                     Already Registered? <Link to="/login">Sign in</Link>
                 </p>
             </form>
    );
    
}

export default Signup;