import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../axios-client";


const UserForm= () =>{

    let {id}= useParams();
    const navigate= useNavigate();
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');


    
      useEffect(()=>{
        axiosClient.get(`/users/${id}`)
        .then(({data}) => {
         // setLoading(false)
          setName(data.name)
          setEmail(data.email)
          setPassword(data.password)
        })
        .catch(() => {
          ///setLoading(false)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    


    const onSubmit= (e)=>{
      
      e.preventDefault();

        axiosClient.put(`/users/${id}`, {name:name, email:email, password:password})
          .then(() => {
            
            navigate('/users')
          })
          .catch(err => {
            const response = err.response;
            if (response && response.status === 422) {
              
            }
          })


    }


    return(
        <div>
            <div className="card animated fadeInDown">
            <h2>{name}</h2>
            <form onSubmit={onSubmit}>
                <input value={name} onChange={ev => setName(ev.target.value)} placeholder="Name"/>
                <input value={email} onChange={ev => setEmail(ev.target.value)} placeholder="Email"/>
                <input value={password} type="password" onChange={ev => setPassword(ev.target.value)} placeholder="Password"/>
                <input type="password" placeholder="Password Confirmation"/>
                <button className="btn">Save</button>
          </form>
            </div>
        </div>
    );
    
}

export default UserForm;