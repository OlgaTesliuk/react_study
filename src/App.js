import React, {useEffect, useState} from 'react';
import {CarForm, Cars} from "./components";
import {carService} from "./services";

const App = () => {
    const[cars, setCars]=useState([]);

    useEffect(()=>{
        carService.getAll().then(({data})=>setCars([...data]))
    },[])

    return (
        <div>
          <CarForm setCats={setCars}/>
            <hr/>
            <Cars cars={cars}/>
        </div>
    );
};

export {App};