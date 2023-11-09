import React, { useContext, useEffect, useState } from 'react';
import { ContextAuth } from '../../Context/Context';
import axios from 'axios';
import Table from './Table';
import Swal from 'sweetalert2';
import { HiOutlineEmojiSad } from 'react-icons/hi';
import { PropagateLoader } from 'react-spinners';
import { Helmet } from 'react-helmet';

const MyAddedFood = () => {

    const { user } = useContext(ContextAuth)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        axios.get(`http://localhost:5000/myaddedfood/?email=${user.email}`, {withCredentials:true})
            .then(res => {
                setData(res.data)
                setLoading(false)
            })
    }, [])

    const deleteBtn = (id) => {
        axios.delete(`http://localhost:5000/deletefood/?id=${id}`)
            .then(res => {

                const newData = data.filter(oldData => oldData._id !== id)
                setData(newData);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Update Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    if (loading) {
        return <div className='h-[80vh] flex justify-center items-center'>
            <PropagateLoader color="#231F20" size={20} />
        </div>
    }

    if (data.length === 0){
        return <div className='flex justify-center items-center h-[50vh]'>
            <h2 className='text-4xl text-gray-500  font-semibold uppercase'>no food found </h2>
            <h2 className='text-5xl text-gray-500  font-semibold uppercase ms-2'><HiOutlineEmojiSad></HiOutlineEmojiSad></h2>
        </div>
    }

    return (
        <div className='max-w-6xl mx-auto px-3 mx:px-8 lg:px-0'>
            <Helmet>
                <title>My Added Food - Sasha Blouse</title>
            </Helmet>
            <h1 className='uppercase text-2xl font-bold text-center mt-16'>My added FooD</h1>

            <div className="overflow-x-auto mt-6 shadow-2xl">
                {
                    data.map(food => <Table food={food} key={food._id} deleteBtn={deleteBtn}></Table>)
                }
            </div>
        </div>
    );
};

export default MyAddedFood;