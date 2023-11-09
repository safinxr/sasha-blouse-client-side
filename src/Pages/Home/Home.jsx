import React from 'react';
import Banner from './Banner/Banner';
import TopDishes from './TopDishes/TopDishes';
import FoodReview from './FoodReview/FoodReview';
import BrandSection from './BrandSection/BrandSection';
import { Helmet } from 'react-helmet';



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Sasha Blouse - Home</title>
             </Helmet>
            <Banner></Banner>
            <TopDishes></TopDishes>
            <FoodReview></FoodReview>
            <BrandSection></BrandSection>
        </div>
    );
};

export default Home;