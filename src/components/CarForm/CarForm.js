import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carValidator} from "../../validators/carValidator";
import {joiResolver} from "@hookform/resolvers/joi";
import {carService} from "../../services";

const CarForm = ({setCars, updateCar}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (updateCar) {
            setValue('brand', updateCar.brand)
            setValue('price', updateCar.price)
            setValue('year', updateCar.year)
        }
    }, [updateCar])

    const submit = async (car) => {
        const {data} = await carService.create(car);
        setCars(prev => [...prev, data]);
        reset();
    }

    const update = async (car) => {
        const {data} = await carService.updataById(updateCar.id, car);
        if (data) {
            const {data} = await carService.getAll()
            setCars(data)
        }
    }


    return (
        <form onSubmit={handleSubmit(updateCar ? update : submit)}>
            <input type="text" placeholder={''}{...register('brand')}/>
            {errors.brand && <span> errors.brand.message}</span>}

            <input type="text" placeholder={''}{...register('price')}/>
            {errors.price && <span> errors.price.message}</span>}

            <input type="text" placeholder={''}{...register('year')}/>
            {errors.year && <span> errors.year.message}</span>}
            <button disabled={!isValid}>{updateCar ? 'Update' : 'Create'}</button>
        </form>
    );
};

export {CarForm};