import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { BsCartPlusFill } from 'react-icons/bs';
import { PropagateLoader } from 'react-spinners';
import Swal from 'sweetalert2'
import { ContextAuth } from '../../Context/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';



const SingleFood = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    


    const { _id, food_name, food_image, food_category, price, quantity, added_by, food_origin, description} = data

    useEffect(() => {
        axios.get(`https://sasha-server-side.vercel.app/singlefood/?id=${id}`)
            .then(res => {
                setData(res.data)
                setLoading(false)
            })
    }, [])

    const notify = (x) => toast.error(x, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: false,
        theme: "light",
    });

    const buyBtn = () => {
        if (quantity > 0){
            navigate(`/buypage/${_id}`)
        }   
        else{
            notify("Sorry out of stock")
        }    

    }


    
    if (loading) {
        return <div className='h-[80vh] flex justify-center items-center'>
            <PropagateLoader color="#231F20" size={20} />
        </div>
    }
    return (
        <div className='bg-[url("https://i.ibb.co/pyW7JSY/Group-1.png")] bg-cover bg-center bg-white bg-blend-overlay bg-opacity-90 h-screen flex items-center'>
            <Helmet>
                <title>Food Details - Sasha Blouse</title>
            </Helmet>
            <dir className='max-w-6xl mx-auto px-3 md:px-8 lg:px-0 my-32 black-text'>
                <div data-aos="zoom-in-up" className='bg-white black-shadow flex h-[550px] rounded'>
                    <div className='w-1/2'>
                        <img className='w-[1000px] h-full object-cover rounded-s' src={food_image} alt="" />
                    </div>
                    <div className='w-1/2 px-10 py-14 '>
                        <h1 className='text-3xl font-bold uppercase line-clamp-1'>{food_name}</h1>
                        <div className='my-6  leading-8'>
                            <p>Available : {quantity > 0 ? "In Stock" : "Stock Out"}</p>
                            <p>Food Category : {food_category}</p>
                            <p>Food Origin : {food_origin}</p>
                            <p>Food Added by : {added_by}</p>

                        </div>
                        <p className='line-clamp-4'>{description}</p>
                        <p className='font-medium mt-4'>Price : ${price}</p>
                        <button
                            onClick={buyBtn}
                            className='uppercase px-6 rounded py-2 bg-black text-white mt-6 flex items-center hover:scale-[1.02] duration-200 active:scale-100'>Order Now <span className='ms-2 '><BsCartPlusFill></BsCartPlusFill></span></button>
                    </div>
                </div>
            </dir>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default SingleFood;