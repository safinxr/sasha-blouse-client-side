import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContextAuth } from '../../Context/Context';
import Swal from 'sweetalert2';

const UpdatePage = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const {user} = useContext(ContextAuth)

    const { _id, food_name, food_image, food_category, price, quantity, added_by, food_origin, description, ordered } = data

    useEffect(() => {
        axios.get(`https://sasha-server-side.vercel.app/singlefood/?id=${id}`)
            .then(res => {
                setData(res.data)

            })
    }, [])






    const addHandel = e => {
        e.preventDefault();
        const email = user.email;
        const added_by = user.displayName;
        const food_name = e.target.name.value.toLowerCase()
        const food_category = e.target.category.value;
        const food_origin = e.target.origin.value;
        const price = e.target.price.value;
        const food_image = e.target.img.value;
        const quantity = e.target.quantity.value;
        const description = e.target.description.value;
        const ordered = data.ordered;

        const foodData = { email, added_by, food_name, food_category, food_origin, description, price, food_image, quantity, ordered };

     
        axios.put(`https://sasha-server-side.vercel.app/updatefood/?id=${_id}`, foodData)
            .then(res => {
                console.log(res.data);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Update Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
            })


    }
    return (
        <div className='bg-[url("https://i.ibb.co/pyW7JSY/Group-1.png")] bg-cover bg-center bg-white bg-blend-overlay bg-opacity-90  flex items-center justify-center'>
            <div className='w-[700px] bg-white shadow-2xl border py-12 px-6 my-20 rounded'>
                <h1 className='uppercase text-xl font-semibold text-center mb-6'>update food</h1>
                <form onSubmit={addHandel}
                    className='grid grid-cols-1 md:grid-cols-2 gap-8' >
                    {/* Name */}
                    <input required className="w-full input input-bordered  h-10 focus:border-0" type="text" name='name' placeholder='Food Name'
                    defaultValue={food_name}
                    />

                    {/* Food Category */}
                    <input required className="w-full input input-bordered  h-10 focus:border-0" type="text" name='category' placeholder='Food Category' defaultValue={food_category} 
                    />

                    {/* Food Origin */}
                    <input required className="w-full input input-bordered  h-10 focus:border-0" type="text" name='origin' placeholder='Food Origin' 
                        defaultValue={food_origin}
                    />

                    {/* price  */}
                    <input required className="w-full input input-bordered  h-10 focus:border-0" type="number" name='price' placeholder='Price' 
                        defaultValue={price}
                    />

                    {/* img  */}
                    <input required className="w-full input input-bordered  h-10 focus:border-0" type="text" name='img' placeholder='Image URL'
                        defaultValue={food_image}
                    />

                    {/* Quantity */}
                    <input required className="w-full input input-bordered  h-10 focus:border-0" type="number" name='quantity' placeholder='Quantity' 
                        defaultValue={quantity}
                    />

                    {/* description  */}
                    <textarea
                        defaultValue={description}
                     required className="md:col-span-2 w-full input input-bordered  h-44 focus:border-0" name="description" placeholder='Write short description' cols="30" rows="10"></textarea>
                    <button type='submit' className="rounded px-10 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#231F20] mx-auto md:col-span-2 active:scale-95">

                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 black-bg top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative black-text transition duration-300 group-hover:text-white ease uppercase">Submit
                        </span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdatePage;