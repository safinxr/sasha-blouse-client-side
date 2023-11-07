import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TopDishesCard from './TopDishesCard';

const TopDishes = () => {
    const [topFood, setTopFood] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/topdishes')
            .then(res => setTopFood(res.data))
    }, [])


    console.log(topFood);
    return (
        <div className='max-w-6xl mx-auto px-3 md:px-8 lg:px-0 my-28'>
            <div>
                <h1 className='font-bold text-4xl black-text text-center uppercase mb-10'>top dishes</h1>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {
                        topFood.map(food => <TopDishesCard food={food} key={food._id}></TopDishesCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TopDishes;