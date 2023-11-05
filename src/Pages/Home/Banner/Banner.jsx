import React from 'react';
import { Link } from 'react-router-dom';
import { Fade, Slide, Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



const Banner = () => {

    return (
        <div className='mt-[-73px] bg-[url("https://i.ibb.co/pyW7JSY/Group-1.png")] bg-cover bg-center bg-white bg-blend-overlay bg-opacity-90 '>
            <div className='max-w-6xl mx-auto px-3 md:px-8 lg:px-0  pt-20 pb-4 lg:pb-6'>
                <Slide
                    duration={1000}
                    prevArrow={<></>}
                    nextArrow={<></>}
                    
                >
                    <div className='flex flex-col-reverse lg:flex-row items-center '>
                        <div className='flex-1 lg:mr-10 flex flex-col items-center text-center
                        lg:text-start lg:items-start'>
                            <h4 className='agbalumo text-3xl mb-4 black-text'>Best In Sasha</h4>
                            <h3 className='text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide uppercase leading-tight black-text'>BBQ Chicken Salad with Creamy Avocado</h3>
                            <p className='text-sm my-2 line-clamp-2 black-text'>This mouthwatering salad is a harmonious blend of smoky, grilled chicken, crisp and vibrant vegetables, and the creamy indulgence of ripe avocados. The star of this dish is the succulent, barbecued chicken, which is expertly seasoned and grilled to perfection</p>

                            <div className='flex items-center justify-center mt-4'>
                                <Link to='/fooditems' className='px-6 py-2 rounded black-bg text-white uppercase flex items-center hover:scale-[0.98] duration-200 '>more details </Link>
                                <Link to='/fooditems' className='px-6 py-2 rounded black-bg text-white uppercase flex items-center hover:scale-[0.98] duration-200 ms-5'>All Food Items </Link>
                            </div>

                        </div>
                        <div className='flex-1'>
                            <img className='ms-auto' src="https://i.ibb.co/NCVqvmF/baner.png" alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col-reverse lg:flex-row items-center'>
                        <div className='flex-1 lg:mr-10 flex flex-col items-center text-center
                        lg:text-start lg:items-start'>
                            <h4 className='agbalumo text-3xl mb-4 black-text'>Best In Sasha</h4>
                            <h3 className='text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide uppercase leading-tight black-text'>Asian Lettuce Wrap Chicken Chopped Salad</h3>
                            <p className='text-sm my-2 line-clamp-2 black-text'>The chicken is marinated with a harmonious blend of Asian flavors, including soy sauce, ginger, and garlic, creating a savory and slightly sweet profile that's both satisfying and irresistible.</p>

                            <div className='flex items-center mt-4'>
                                <Link to='/fooditems' className='px-6 py-2 rounded black-bg text-white uppercase flex items-center hover:scale-[0.98] duration-200 '>more details </Link>
                                <Link to='/fooditems' className='px-6 py-2 rounded black-bg text-white uppercase flex items-center hover:scale-[0.98] duration-200 ms-5'>All Food Items </Link>
                            </div>

                        </div>
                        <div className='flex-1'>
                            <img className='ms-auto ' src="https://i.ibb.co/YcZwxyM/baner1.png" alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col-reverse lg:flex-row items-center '>
                        <div className='flex-1 lg:mr-10 flex flex-col items-center text-center
                        lg:text-start lg:items-start'>
                            <h4 className='agbalumo text-3xl mb-4 black-text'>Best In Sasha</h4>
                            <h3 className='text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide uppercase leading-tight black-text'>Different Spice For A Different Taste</h3>
                            <p className='text-sm my-2 line-clamp-2 black-text'> Cinnamon is known for its warm and sweet flavor. It is often used in both sweet and savory dishes, such as apple pie and Moroccan tagines. Cinnamon adds depth and warmth to recipes.</p>

                            <div className='flex items-center mt-4'>
                                <Link to='/fooditems' className='px-6 py-2 rounded black-bg text-white uppercase flex items-center hover:scale-[0.98] duration-200 '>more details </Link>
                                <Link to='/fooditems' className='px-6 py-2 rounded black-bg text-white uppercase flex items-center hover:scale-[0.98] duration-200 ms-5'>All Food Items </Link>
                            </div>

                        </div>
                        <div className='flex-1'>
                            <img className='ms-auto' src="https://i.ibb.co/QjC9nTr/first-slider.png" alt="" />
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default Banner;