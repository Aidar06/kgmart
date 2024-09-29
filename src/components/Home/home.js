import React from 'react';
import HomeHero from "./HomeHero/homeHero";
import HomeStock from "./HomeStock/homeStock";

const Home = () => {
    return (
        <div id='home'>
            <HomeHero/>
            <HomeStock/>
        </div>
    );
};

export default Home;