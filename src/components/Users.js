import React from 'react';

const Users = ({users, oneSelectUser}) => {
    return (
        <div>
            {users.map((item) => {
                const {id:userId, name} = item;
                return (
                    <div key={`${userId}`}>
                        {userId}---{name}
                        <button onClick={()=>oneSelectUser(userId)}>select users</button>
                         </div>
                )
            })}
        </div>
    );
};

export {Users};