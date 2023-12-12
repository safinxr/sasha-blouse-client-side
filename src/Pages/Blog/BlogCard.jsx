import React from 'react';

const BlogCard = ({ data }) => {
    const { date, title, img, description } = data
    return (
        
        <div className='flex flex-col lg:flex-row'>
            <div className='flex justify-center' >
                <img className='h-[400px] w-[400px] rounded-lg object-cover ' src={img} alt="food" />
            </div>
            <div className="lg:px-24 pt-8 flex-1">
                <p className='text-gray-600 font-medium'>{date}</p>
                <h2 className="text-3xl font-semibold mt-3">{title}</h2>
                <p className='text-gray-600 text-base mt-6'>{description}</p>
            </div>

        </div>
    );
};

export default BlogCard;