import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const FoodReview = () => {
    return (
        <div className='bg-[#F3F3F3]'>
            <div className='max-w-6xl mx-auto px-3 md:px-8 lg:px-0 py-16'>
                <h1 className='text-4xl font-bold uppercase text-center mb-20'>food reviews</h1>
                <div className=' py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 md:gap-x-6'>
                    <div className='bg-white p-5 rounded black-shadow'>
                        <div className='w-28 h-28 rounded-full mx-auto mt-[-69px]'>
                            <img className='w-full h-full object-cover rounded-full' src='https://img.taste.com.au/z9EIVHJg/taste/2021/02/10-minute-vegetarian-pad-thai-168946-2.jpg' alt="" />
                        </div>
                        <h1 className='font-bold text-xl text-center mt-5 mb-6'>VEGETABLE PAD THAI</h1>
                        <p className='text-sm line-clamp-6 '>"Vegetable pad thai is one of my favorite dishes to order when I crave something delicious, healthy, and satisfying. It is a perfect balance of flavors, textures, and colors, with rice noodles, fresh vegetables, crunchy peanuts, and a tangy sauce that makes every bite irresistible."</p>
                        <Link to='/singlefood/654aaa24bad952a1327a427e'
                            className='flex justify-center items-center w-3/5 mx-auto py-2 my-8 rounded bg-[#231F20] text-white active:scale-95'
                        >
                            SEE MORE 
                            
                        </Link>

                    </div>
                    <div className='bg-white p-5 rounded black-shadow'>
                        <div className='w-28 h-28 rounded-full mx-auto mt-[-69px]'>
                            <img className='w-full h-full object-cover rounded-full' src='https://www.savoryexperiments.com/wp-content/uploads/2022/05/Seafood-Paella-20.jpg' alt="" />
                        </div>
                        <h1 className='font-bold text-xl text-center mt-5 mb-6'>SEAFOOD PAELLA </h1>
                        <p className='text-sm line-clamp-6 '>"I have tried different recipes for seafood paella, but the one I found most authentic and flavorful is from Spanish Sabores1. It uses homemade stock, sofrito, and saffron, which are essential ingredients for a good paella. It also has a variety of seafood, such as lobster, shrimp, squid, mussels, and clams, which add texture and taste to the dish."</p>
                        <Link to='/singlefood/654aaa24bad952a1327a427f'
                            className='flex justify-center items-center w-3/5 mx-auto py-2 my-8 rounded bg-[#231F20] text-white active:scale-95'
                        >
                            SEE MORE 
                            
                        </Link>

                    </div>
                    <div className='bg-white p-5 rounded black-shadow'>
                        <div className='w-28 h-28 rounded-full mx-auto mt-[-69px]'>
                            <img className='w-full h-full object-cover rounded-full' src='https://cdn.donnahaycdn.com.au/files/classic_margherita_pizza.jpg' alt="" />
                        </div>
                        <h1 className='font-bold text-xl text-center mt-5 mb-6'>CLASSIC MARGHERITA PIZZA</h1>
                        <p className='text-sm line-clamp-6 '>"I would highly recommend this recipe to anyone who loves pizza and Italian cuisine. It is easy to follow, and the result is a stunning and delicious meal that will impress your family and friends. Classic Margherita pizza is a dish that I will always enjoy and make again. It is a true Italian classic!"</p>
                        <Link to='/singlefood/654aaa24bad952a1327a427a'
                            className='flex justify-center items-center w-3/5 mx-auto py-2 my-8 rounded bg-[#231F20] text-white active:scale-95'
                        >
                            SEE MORE 
                            
                        </Link>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default FoodReview;