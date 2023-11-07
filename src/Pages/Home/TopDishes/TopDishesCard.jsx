import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const TopDishesCard = ({ food }) => {
    const { id, food_name, food_image, food_category, price, quantity, added_by, food_origin, description, ordered } = food
    return (
        <div className='black-shadow rounded flex flex-col group'>
            <div className='h-80 overflow-hidden'>
                <img className='w-full h-full object-cover object-left rounded-t group-hover:scale-105 duration-300' src={food_image} alt="" />
            </div>

            {/* 🤖🤖🤖🤖🤖🤖🤖 */}


            <div className=' px-2 py-6 flex-grow flex flex-col justify-between '>
                
                <h2 className='text-lg font-bold uppercase text-center line-clamp-1'>{food_name}</h2>

                <div className=''>
                    <p className=' font-medium uppercase text-center'>{food_category} || ${price}</p>
                    <div className='text-xl flex justify-center items-center mt-2'>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TopDishesCard;