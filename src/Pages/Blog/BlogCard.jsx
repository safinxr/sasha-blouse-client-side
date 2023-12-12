import React from 'react';

const BlogCard = ({ data }) => {
    const { date, title, img, description } = data
    return (
        // <div className="card card-side bg-base-100 shadow-xl">
        //     <figure><img className='h-[400px] w-[400px]' src={img} alt="Movie" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">{title}</h2>
        //         <p>Click the button to watch on Jetflix app.</p>
        //         <div className="card-actions justify-end">
        //             <button className="btn btn-primary">Watch</button>
        //         </div>
        //     </div>
        // </div>
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