import React from 'react';

const GetUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users').then(resp=>resp.json());
};

export {GetUsers};