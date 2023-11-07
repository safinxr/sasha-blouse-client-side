import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import AllFoodCard from './AllFoodCard';
import { PropagateLoader } from 'react-spinners';

const FoodItems = () => {
    const [pageCount, setPageCount] = useState(1)
    const [loading, setLoading] = useState(true)
    const [allData, setAllData] = useState([]);
    const [search, setSearch] = useState('')
    const [dataCount, setDataCount] = useState(0)
    console.log(dataCount);



    useEffect(() => {
        axios.get(`http://localhost:5000/allfooditems?page=${pageCount}`)
            .then(res => {
                setLoading(true)
                setAllData([...allData, ...res.data.result])
                setDataCount(res.data.count)
                setLoading(false)
            })
    }, [pageCount])

    const searchF = e => {
        setSearch(e.target.value.toLowerCase());
    }
    const searchBtn = () => {
        setLoading(true)
        console.log(search);
        axios.get(`http://localhost:5000/searchfood/${search}`)
            .then(res => {
                setAllData(res.data)
                setLoading(false)
            })
    }

    return (
        <div className='max-w-6xl mx-auto px-3 md:-px-8 lg:px-0'>
            <div className='mt-12 text-2xl max-w-4xl mx-auto rounded-md font-medium border-2  border-[#231F20] flex items-center'>
                <div className='px-4'>
                    <BiSearchAlt2></BiSearchAlt2>
                </div>

                <input
                    onChange={searchF}
                    name='search'
                    className=' w-full h-full focus:outline-none bg-transparent'
                    type="text" placeholder='Type to search' />
                <div
                    onClick={searchBtn}
                    className='py-1.5 px-4 cursor-pointer black-bg'>
                    <h1 className='text-white'>Search</h1>
                </div>
            </div>
            {
                loading ? <div className='h-[80vh] flex justify-center items-center'>
                    <PropagateLoader color="#231F20" size={20} />
                </div>
                    :
                    <div className='my-12 md:my-16 lg:my-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            allData.map(food => <AllFoodCard food={food} key={food._id}></AllFoodCard>)
                        }
                    </div>

            }

            {
                allData.length === dataCount ? <></>
                    :
                    <div className='mb-20 flex justify-center'>
                        <button
                            onClick={() => setPageCount(pageCount + 1)}

                            className='px-5 py-2 black-bg text-white active:scale-95 rounded'>
                            See more
                        </button>
                    </div>
            }


        </div>
    );
};

export default FoodItems;