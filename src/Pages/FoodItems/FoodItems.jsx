import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

const FoodItems = () => {
    return (
        <div className='max-w-6xl mx-auto'>
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

        </div>
    );
};

export default FoodItems;