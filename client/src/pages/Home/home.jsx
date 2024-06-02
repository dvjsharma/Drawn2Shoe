import React from "react";
import Carousel2 from "../../components/Carousel2";
import Guide from "../../components/Guide/guide";
import HomeBanner from "../../components/Home-banner/HomeBanner";
import Home_retailers_comp from "../../components/Home-retailers";
import Carousel from "../../components/carousel";
import HomeWrapper from '../../components/HomeWrapper';
const Home = () => {
    return (
        <>
            <HomeWrapper/>
            <HomeBanner />
            <Carousel />
            <Guide />
            <Home_retailers_comp />
            <Carousel2 />
        </>
    );
};

export default Home;
