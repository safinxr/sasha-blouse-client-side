import React, { useContext, useEffect, useState } from 'react';
import order from '../../assets/order.json'
import Lottie from 'lottie-react';
import { useNavigate, useParams } from 'react-router-dom';
import axios, { Axios } from 'axios';
import { BsCartPlusFill } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContextAuth } from '../../Context/Context';
import Swal from 'sweetalert2';

const BuyPage = () => {
    const [reset, setReset] = useState(true)
    const { user } = useContext(ContextAuth)
    const { id } = useParams()
    const [data, setData] = useState([])
    const { _id, food_name, food_image, food_category, price, quantity, added_by, food_origin, description, ordered, email } = data

    const [totalPrice, setTotalPrice] = useState(0)
    const [qty, setQty] = useState(0)


    useEffect(() => {
        axios.get(`http://localhost:5000/singlefood/?id=${id}`)
            .then(res => {
                setData(res.data)
            })
    }, [reset])

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

    const quantityHandel = e => {
        const value = parseInt(e.target.value);
        setQty(value)
        const result = price * value || 0
        const res = parseFloat(result.toFixed(2))
        setTotalPrice(res)
    }

    const buyBtn = () => {
        if (qty > 0) {

            if (quantity >= qty) {
                if (user.email !== email) {
                    const foodId = _id;
                    const email = user.email
                    const buyingData = { food_name, food_image, food_category, totalPrice, foodId, qty, food_origin, description, email, added_by }
                    const newQty = quantity - qty;

                    axios.post(`http://localhost:5000/buyingdata/?newqty=${newQty}&od=${ordered}`, buyingData)
                        .then(res => {
                            setReset(!reset)
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Food Added Successful',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        })
                }
                else {
                    notify("Sorry you can't buy your own food")
                }

            }
            else {
                notify("Insufficient Quantity")
            }
        }
        else{
            notify("Please enter quantity")
        }
    }



    return (
        <div>
            <div className='h-[88vh] relative max-w-6xl mx-auto px-3 md:px-8 lg:px-0'>
                <Lottie className='h-full ms-[-450px] ' animationData={order} loop={true} />
                <div className='absolute right-0 top-1/2 -translate-y-1/2 w-[500px] bg-white shadow-2xl px-8 py-16 rounded'>
                    <h1 className='font-semibold text-2xl uppercase'>{food_name}</h1>
                    <div className='my-6 flex '>
                        <div className='  leading-8 w-7/12 pr-2 text-lg '>
                            <p>Available quantity : {quantity}</p>
                            <p>Food Origin : {food_origin}</p>
                            <p>Added by : {added_by}</p>
                            <p>Price : ${price}</p>
                            <p>Total Price: ${totalPrice}</p>
                            <p className='flex items-center'>Enter Quantity :
                                <input
                                    onChange={quantityHandel}
                                    className='focus:outline-none w-16 ms-2 border-2 border-black rounded h-7 px-1 py-0 text-center' type="number"
                                    placeholder='QTY'
                                /></p>
                        </div>
                        <div className='w-5/12'>
                            <img className='w-full rounded-md h-full object-cover' src={food_image} alt="" />
                        </div>
                    </div>

                    <div className='mt-4 flex items-end'>

                        <button
                            onClick={buyBtn}
                            className='uppercase px-6 rounded py-2 bg-black text-white mt-6 flex items-center hover:scale-[1.02] duration-200 active:scale-100'>confirm order <span className='ms-2 '><BsCartPlusFill></BsCartPlusFill></span></button>
                    </div>

                </div>
            </div>
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

export default BuyPage;