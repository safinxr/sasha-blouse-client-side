import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsCartPlusFill } from 'react-icons/bs';
import { PropagateLoader } from 'react-spinners';



const SingleFood = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:5000/singlefood/?id=${id}`)
            .then(res => {
                setData(res.data)
                setLoading(false)
            })
    }, [])
    const { _id, food_name, food_image, food_category, price, quantity, added_by, food_origin, description, ordered } = data
    if (loading) {
        return <div className='h-[80vh] flex justify-center items-center'>
            <PropagateLoader color="#231F20" size={20} />
        </div>
    }
    return (
        <div className='bg-[url("https://i.ibb.co/pyW7JSY/Group-1.png")] bg-cover bg-center bg-white bg-blend-overlay bg-opacity-90 h-screen flex items-center'>
            <dir className='max-w-6xl mx-auto px-3 md:px-8 lg:px-0 my-32 black-text'>
                <div className='bg-white black-shadow flex h-[500px] rounded'>
                    <div className='w-7/12'>
                        <img className='w-[1000px] h-full object-cover rounded-s' src={food_image} alt="" />
                    </div>
                    <div className='w-5/12 px-10 py-16'>
                        <h1 className='text-2xl font-bold uppercase line-clamp-1'>{food_name}</h1>
                        <div className='my-6 font-medium text-lg leading-10'>
                            <p>Available : {quantity > 0 ? "In Stock" : "Stock Out"}</p>
                            <p>Food Category : {food_category}</p>
                            <p>Food Origin : {food_origin}</p>
                            <p>Food Added by : {added_by}</p>
                        </div>
                        <p className='font-bold text-xl'>Price : ${price}</p>
                        <button className='uppercase px-6 rounded py-2 bg-black text-white mt-8 flex items-center hover:scale-[1.02] duration-200 active:scale-100'>Order Now <span className='ms-2 '><BsCartPlusFill></BsCartPlusFill></span></button>
                    </div>
                </div>
            </dir>
        </div>
    );
};

export default SingleFood;