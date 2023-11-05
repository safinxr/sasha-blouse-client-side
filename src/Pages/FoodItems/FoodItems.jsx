import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import AllFoodCard from './AllFoodCard';

const FoodItems = () => {
    const [allData, setAllData] = useState([]);
    useEffect(()=>{
        axios.get('/fakeData.json')
        .then(res=> setAllData(res.data))
    },[])
    console.log(allData);
    return (
        <div className='max-w-6xl mx-auto px-3 md:-px-8 lg:px-0'>
            <div className='mt-12 text-2xl max-w-4xl mx-auto rounded-md font-medium border-2  border-[#231F20] flex items-center'>
                <div className='px-4'>
                    <BiSearchAlt2></BiSearchAlt2>
                </div>

                <input
                    className=' w-full h-full focus:outline-none bg-transparent'
                    type="text" placeholder='Type to search' />
                <div className='py-1.5 px-5 cursor-pointer black-bg'>
                    <h1 className='text-white'>Search</h1>
                </div>
            </div>

            <div className='my-12 md:my-16 lg:my-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    allData.map(food => <AllFoodCard food={food} key={food.id}></AllFoodCard>)
                }
            </div>

        </div>
    );
};

export default FoodItems;