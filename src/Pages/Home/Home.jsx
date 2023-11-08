import React from 'react';
import Banner from './Banner/Banner';
import TopDishes from './TopDishes/TopDishes';
import FoodReview from './FoodReview/FoodReview';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopDishes></TopDishes>
            <FoodReview></FoodReview>
        </div>
    );
};

export default Home;