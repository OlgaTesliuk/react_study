import React, {useEffect, useState} from 'react';
import {carService} from "../../services";
import {Car} from "../Car/Car";

const Cars = ({cars}) => {


    return (
        <div>
            {cars.map(car=> <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};