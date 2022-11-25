import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import CustomerReactions from '../Customer Reaction/CustomerReactions'

const Home = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
            <CustomerReactions/>
        </div>
    );
};

export default Home;