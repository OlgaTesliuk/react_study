import React from 'react';

const GetUser = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(resp=>resp.json());
};

export {GetUser};