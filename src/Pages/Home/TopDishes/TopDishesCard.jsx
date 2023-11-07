import React from 'react';
import { FaBeer } from 'react-icons/fa';

const TopDishesCard = ({ food }) => {
    const { id, food_name, food_image, food_category, price, quantity, added_by, food_origin, description, ordered } = food
    return (
        <div className='shadow-lg rounded'>
            <div className='h-80'>
                <img className='w-full h-full object-cover object-left rounded-t' src={food_image} alt="" />
            </div>
            <div className=' p-5'>
                <h2 className='text-lg font-bold uppercase text-center '>{food_name}</h2>
                <div>
                    <p className='text-base font-medium uppercase text-center'>{food_category} / ${price}</p>
                </div>
            </div>

        </div>
    );
};

export default TopDishesCard;