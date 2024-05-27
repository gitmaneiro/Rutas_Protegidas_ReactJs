import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import axiosClient from "../axios-client";


const UserForm= () =>{

    const navigate= useNavigate();
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');


    const onSubmit= async (e)=>{

      e.preventDefault();
   
       
         try {
          await axiosClient.post('/users', {name:'dmz', email:'dmz85@gmail.com', password:12345678})
          .then(() => {
            navigate('/users')
          })
          .catch(err => {
            const response = err.response;
            if (response && response.status === 422) {
             
            }
          })
          
         } catch (error) {
            console.log(error);
         }

    }


    return(
        <div>
            <div className="card animated fadeInDown">
            <h2>{name}</h2>
            <form onSubmit={onSubmit}>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Name"/>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
                <input value={password}  type="password" onChange={e => setPassword(e.target.value)} placeholder="Password"/>
                <input type="password" placeholder="Password Confirmation"/>
                <button className="btn">Save</button>
          </form>
            </div>
        </div>
    );
    
}

export default UserForm;