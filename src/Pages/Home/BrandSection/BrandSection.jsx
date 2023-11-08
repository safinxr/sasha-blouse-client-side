import React from 'react';

const BrandSection = () => {
    return (
        <div className='max-w-6xl mx-auto px-3 md:px-8 lg:px-0 my-32'>
            <h3 className='text-center mb-16 text-xl font-medium'>AS SEEN IN :</h3>
            <div className='flex justify-between'>
                <img src="https://chefsavvy.com/wp-content/uploads/buzzfeed-1.svg" alt="" />
                <img src="https://chefsavvy.com/wp-content/uploads/msn-1.svg" alt="" />
                <img src="https://chefsavvy.com/wp-content/uploads/good-housekeeping-1.svg" alt="" />
                <img src="https://chefsavvy.com/wp-content/uploads/womenshealth-1.svg" alt="" />
                <img src="https://chefsavvy.com/wp-content/uploads/countryliving-1.svg" alt="" />
                <img src="https://chefsavvy.com/wp-content/uploads/shape-1.svg" alt="" />
            </div>
        </div>
    );
};

export default BrandSection;