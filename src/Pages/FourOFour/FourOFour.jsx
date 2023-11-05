import React from 'react';
import Lottie from "lottie-react";
import fourOPage from "../../assets/four.json"
import { Link } from 'react-router-dom';

const FourOFour = () => {
    return (
        <div className='relative '>
            <Lottie animationData={fourOPage} loop={true} />
            <div className='absolute bottom-24 left-1/2 transform -translate-x-1/2 '>
                <Link to='/' className=" relative inline-flex items-center justify-start py-2  pl-4 pr-12 overflow-hidden font-semibold black-text transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-white group w-full">
                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out black-bg group-hover:h-full"></span>
                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg className="w-5 h-5 black-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" sstrokelinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" sstrokelinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Go Back</span>
                </Link>

            </div>

        </div>
    );
};

export default FourOFour;