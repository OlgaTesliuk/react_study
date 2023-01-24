import React, {useEffect, useState} from 'react';
import {GetUser} from "../api/GetUser";

const UsersDetails = ({userId, onRemoveUserDetails}) => {
    const[user, setUser]=useState({});

    useEffect(()=>{
        if(userId) {
            GetUser(userId).then(resp => setUser(resp))
        }
    },[userId])
    if(!userId) return ;
    console.log(user);
    return (
        <div>
           UserDetails:
            <div>name:{user.name}</div>
            <div>username: {user.username}</div>
            <div>email: {user.email}</div>
            <div>phone:{user.phone}</div>
            {/*<button onClick={()=> onRemoveUserDetails(null)}>Clean up user</button>*/}
        </div>
    );
};

export {UsersDetails};