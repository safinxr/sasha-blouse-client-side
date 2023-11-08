import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const AllFoodCard = ({ food }) => {
    useEffect(() => {
        AOS.init();
    }, [])


    const navigate = useNavigate()
    const { _id, food_name, food_image, food_category, price, quantity } = food
    return (
        <div data-aos="fade-up" className=' rounded black-shadow bg-white relative hover:scale-[1.02] duration-200 cursor-pointer'
            onClick={() => navigate(`/singlefood/${_id}`)}
        >
            <img className='rounded-t h-60 w-full object-cover' src={food_image} alt="" />
            <div className='px-4 pt-4 pb-14 '>
                <h2 className='text-xl font-semibold uppercase mb-3'>{food_name}</h2>
                <div>
                    <p className='font-'>Category : {food_category}</p>
                    <p className='font-'>Price : ${price}</p>
                    <p className='font-'>Available quantity : {quantity}</p>
                </div>
                
            </div>
            <div className='flex-wrap  absolute bottom-0 w-full'>
                <Link to={`/singlefood/${_id}`} className=" relative inline-flex items-center justify-start py-2.5 pl-4 pr-12 overflow-hidden font-semibold black-text transition-all duration-150 ease-in-out rounded-b hover:pl-10 hover:pr-6 bg-white group w-full">
                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out black-bg group-hover:h-full"></span>
                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg className="w-5 h-5 black-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" sstrokelinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" sstrokelinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Details</span>
                </Link>
                
            </div>
        </div>
    );
};

export default AllFoodCard;