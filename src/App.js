import React, {useEffect, useState} from 'react';
import {Users} from "./components/Users";
import {UsersDetails} from "./components/UsersDetails";
import {GetUsers} from "./api/GetUsers";

const App = () => {
    const[users, setUsers]= useState([]);
    const[userId, setUserId]=useState(null);

    useEffect(()=>{
        GetUsers().then(resp=>setUsers(resp))
    },[])


    return (
        <div>
          <Users users={users} oneSelectUser={setUserId} />
            {!!userId&&<UsersDetails userId={userId}  />}
        </div>
    );
};

export {App};