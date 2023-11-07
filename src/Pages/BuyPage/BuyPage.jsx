import React, { useEffect, useState } from 'react';
import order from '../../assets/order.json'
import Lottie from 'lottie-react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const BuyPage = () => {
    const { id } = useParams()
    const [data, setData] = useState([])

    
    const { _id, food_name, food_image, food_category, price, quantity, added_by, food_origin, description, ordered } = data

    useEffect(() => {
        axios.get(`http://localhost:5000/singlefood/?id=${id}`)
            .then(res => {
                setData(res.data)
            })
    }, [])
    return (
        <div>
            <div className='h-[88vh] relative max-w-6xl mx-auto px-3 md:px-8 lg:px-0'>
                <Lottie className='h-full ms-[-450px] ' animationData={order} loop={true} />
                <div className='absolute right-0 top-1/2 -translate-y-1/2 w-[500px] bg-white shadow-2xl p-8 rounded'>
                   <h1 className='font-semibold text-xl uppercase'>{food_name}</h1>
                </div>
            </div>
        </div>
    );
};

export default BuyPage;