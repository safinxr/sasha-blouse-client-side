import React from 'react';
import Banner from './Banner/Banner';
import TopDishes from './TopDishes/TopDishes';
import FoodReview from './FoodReview/FoodReview';
import BrandSection from './BrandSection/BrandSection';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopDishes></TopDishes>
            <FoodReview></FoodReview>
            <BrandSection></BrandSection>
        </div>
    );
};

export default Home;