import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import AllFoodCard from './AllFoodCard';
import { PropagateLoader } from 'react-spinners';
import { HiOutlineEmojiSad } from 'react-icons/hi';

const FoodItems = () => {
    const [pageCount, setPageCount] = useState(1)
    const [searchPage, setSearchPage] = useState(0)
    const [loading, setLoading] = useState(true)
    const [loadingBtn, setLoadingBtn] = useState(false)
    const [allData, setAllData] = useState([]);
    const [search, setSearch] = useState('')
    const [dataCount, setDataCount] = useState(0)
    const [inputValue, setInputValue] = useState(true)



    useEffect(() => {
        setLoadingBtn(true)
        axios.get(`http://localhost:5000/allfooditems?page=${pageCount}`)
            .then(res => {

                setAllData([...allData, ...res.data.result])
                setDataCount(res.data.count)
                setLoadingBtn(false)
                setLoading(false)
            })
    }, [pageCount])

    const searchF = e => {
        setSearch(e.target.value.toLowerCase());
        setInputValue(true)
    }
    const searchBtn = () => {
        if(search){
            setLoading(true)
            console.log(search);
            axios.get(`http://localhost:5000/searchfood/?name=${search}&`)
                .then(res => {
                    setAllData(res.data)
                    setSearchPage(res.data.length)
                    setLoading(false)
                })
        }
        else{
            setInputValue(false)
        }
    }

    return (
        <div className='max-w-6xl mx-auto px-3 md:-px-8 lg:px-0'>
            <div className={inputValue ? 'mt-12 text-2xl max-w-4xl mx-auto rounded-md font-medium border-2  border-[#231F20] flex items-center':
                'mt-12 text-2xl max-w-4xl mx-auto rounded-md font-medium border-2  border-[#eb2d2d] flex items-center'
            }>
                <div className='px-4'>
                    <BiSearchAlt2></BiSearchAlt2>
                </div>

                <input
                    required
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
                    allData.length > 0 ? <div className='my-12 md:my-16 lg:my-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            allData.map(food => <AllFoodCard food={food} key={food._id}></AllFoodCard>)
                        }
                    </div>
                    :
                    <div className='flex justify-center items-center h-[50vh]'>
                            <h2 className='text-4xl text-gray-500  font-semibold uppercase'>no food found </h2>
                            <h2 className='text-5xl text-gray-500  font-semibold uppercase ms-2'><HiOutlineEmojiSad></HiOutlineEmojiSad></h2>
                    </div>
                    

            }

            {
                allData.length === dataCount || allData.length === searchPage ? <></>
                    :
                    <div className='mb-20 flex justify-center'>
                        {
                            loadingBtn ? <PropagateLoader color="#231F20" size={20} />
                                :
                                <button
                                    onClick={() => setPageCount(pageCount + 1)}

                                    className='px-5 py-2 black-bg text-white active:scale-95 rounded'>
                                    See more
                                </button>
                        }

                    </div>
            }


        </div>
    );
};

export default FoodItems;