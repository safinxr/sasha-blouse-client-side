import React, { useContext, useEffect, useState } from 'react';
import { ContextAuth } from '../../Context/Context';
import axios from 'axios';
import Table from './Table';

const MyAddedFood = () => {

    const { user } = useContext(ContextAuth)
    const [data, setData] = useState([])
    


    useEffect(()=>{
        axios.get(`http://localhost:5000/myaddedfood/?email=${user.email}`)
        .then(res => setData(res.data))
    },[])

    console.log(data);
    return (
        <div className='max-w-6xl mx-auto px-3 mx:px-8 lg:px-0'>
            <h1 className='uppercase text-2xl font-bold text-center mt-16'>My added FooD</h1>
            
            <div className="overflow-x-auto mt-6 shadow-2xl">
                {
                    data.map(food => <Table food={food} key={food._id}></Table>)
                }
            </div>
        </div>
    );
};

export default MyAddedFood;