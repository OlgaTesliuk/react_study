import React from 'react';
import {useForm} from "react-hook-form";
import {carValidator} from "../../validators/carValidator";
import {joiResolver} from "@hookform/resolvers/joi";
import {carService} from "../../services";

const CarForm = ({setCars}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const submit = async (car) => {
       const {data}=await carService.create(car);
       setCars(prev=>[...prev, data]);
         reset();
    }


    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={''}{...register('brand')}/>
            {errors.brand &&<span> errors.brand.message}</span>}

            <input type="text" placeholder={''}{...register('price')}/>
            {errors.price &&<span> errors.price.message}</span>}

            <input type="text" placeholder={''}{...register('year')}/>
            {errors.year &&<span> errors.year.message}</span>}
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export {CarForm};