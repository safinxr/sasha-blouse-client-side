import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const TopDishesCard = ({ food }) => {
    const { id, food_name, food_image, food_category, price, quantity, added_by, food_origin, description, ordered } = food
    return (
        <div className='black-shadow rounded flex md:flex-col group'>
            <div className='h-32 md:h-80 w-40 md:w-auto overflow-hidden flex-1 md:flex-auto'>
                <img className='w-full h-full object-cover md:object-left rounded-t group-hover:scale-105 duration-300' src={food_image} alt="" />
            </div>

            {/* 🤖🤖🤖🤖🤖🤖🤖 */}


            <div className=' px-2 py-6 flex-grow flex flex-col justify-between flex-1 md:flex-auto'>
                
                <h2 className='text-sm md:text-lg font-bold uppercase text-center line-clamp-2 md:line-clamp-1'>{food_name}</h2>

                <div className=''>
                    <p className=' font-medium uppercase text-center text-xs md:text-base'>{food_category} || ${price}</p>
                    <div className='md:text-xl flex justify-center items-center mt-2'>
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