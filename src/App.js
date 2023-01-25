import React, {useEffect, useState} from 'react';
import {CarForm, Cars} from "./components";
import {carService} from "./services";

const App = () => {
    const [updateCar, setUpdateCar]= useState(null)
    const[cars, setCars]=useState([]);

    useEffect(()=>{
        carService.getAll().then(({data})=>setCars([...data]))
    },[])

    return (
        <div>
          <CarForm setCars={setCars} updateCar={updateCar}/>
            <hr/>
            <Cars cars={cars} setUpdateCar={setUpdateCar} setCars={setCars} />
        </div>
    );
};

export {App};