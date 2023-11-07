import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TopDishesCard from './TopDishesCard';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { PropagateLoader } from 'react-spinners';

const TopDishes = () => {
    const [loading, setLoading] = useState(true)
    const [topFood, setTopFood] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/topdishes')
            .then(res => {
                setTopFood(res.data)
                setLoading(false)
            })
            
    }, [])


    console.log(topFood);
    return (
        <div className='max-w-6xl mx-auto px-3 md:px-8 lg:px-0 my-28'>
            <div>
                <div className='flex justify-between items-start '>
                    <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl black-text uppercase mb-4 '>top dishes</h1>
                    <Link to='fooditems' className='px-2 py-1 md:px-4 md:py-1.5 border-2 border-[#231F20] md:flex items-center uppercase md:font-medium hover:bg-[#231F20]
                     rounded hover:text-white duration-300 hidden'>See All Items <span className='ms-2 md:text-xl'><BsArrowRight></BsArrowRight></span></Link>
                </div>
                {
                    loading ? <div className='flex justify-center mt-32'>
                        <PropagateLoader color="#231F20" size={20} />
                    </div>
                    :
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                            {
                                topFood.map(food => <TopDishesCard food={food} key={food._id}></TopDishesCard>)
                            }
                        </div>
                }
                
            </div>
        </div>
    );
};

export default TopDishes;