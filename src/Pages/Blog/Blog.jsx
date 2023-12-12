import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import BlogCard from './BlogCard';

const Blog = () => {
    const [AllData, setAllData] = useState([])
    
    useEffect(() => {
        axios.get('/fakeBlog.json')
        .then(res => setAllData(res.data))
        
    }, []);


    console.log(AllData);
    return (
        <div >
            <Helmet>
                <title>Blogs - Sasha Blouse</title>
            </Helmet>
            <div className='mb-20 mt-16'>
                <h2 className='text-2xl md:text-4xl font-bold uppercase text-center border-b-2 pb-2'>Food Blogs</h2>
            </div>

            <div className='max-w-6xl mx-auto px-3 md:px-8 lg:px-0 mt-12 mb-24'>
                <div className='grid grid-cols-1 gap-24'>
                    {
                        AllData.map(data => <BlogCard key={data.id} data={data}></BlogCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;