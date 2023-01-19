import React from 'react';
import {Character} from "../Character/Character";

const Characters = () => {
    const characters = [
        {
            id: 416,
            name: "Muscular Mannie",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        },
        {
            id: 12,
            name: "Alexander",
            status: "Dead",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/12.jpeg"
        },
        {
            id: 2,
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        },
        {
            id: 3,
            name: "Summer Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
        },
        {
            id: 6,
            name: "Abadango Cluster Princess",
            status: "Alive",
            species: "Alien",
            image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg"
        }
    ]
    return (
        <div>
            {
                characters.map(character => <Character key={character.id} character={character}/>)
            }

        </div>
    );
};

export {Characters};