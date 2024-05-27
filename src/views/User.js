import React, { useEffect, useState } from "react";
import axiosClient from "../axios-client";
import { Link } from "react-router-dom";


const User= () =>{

    const [users, setUsers]=useState([]);

    useEffect(()=>{
        getUsers();
    }, [])

    const onDelete = (user)=>{

        if (!window.confirm("Are you sure you want to delete this user?")) {
            return
          }

        axiosClient.delete(`/users/${user.id}`)
        .then(()=>{
            getUsers();
        })
    }

    const getUsers= ()=>{
        axiosClient.get('/users')
        .then(({data})=>{
            setUsers(data.data);

        })
    }
    //console.log(users);
    return(
        <div>
            <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
                <h2>Users</h2>
                <Link to="/user/new" className="btn-add">New user</Link>
            </div>
            <div className="card animated fadeInDown">
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Create Date</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user=>(
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.created_at}</td>
                                    <td>
                                        <Link to={'/user/' + user.id} className="btn-edit">Edit</Link>
                                        &nbsp;
                                        <button onClick={e=> onDelete(user)} className="btn-delete">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
    
}

export default User;