import React from 'react';


const Character = ({character}) => {
    const{id, name, status, species, image } = character;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>species: {species}</div>
            <div>status: {status}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};