import React from "react";
import Hero from "./Hero/Hero";
import Categories from "./Categories/Categories";
import { Card } from "antd";
import Prosper from "./Prosper/Prosper";
import Video from "./Videos/Video";
import Business from "./Business/Business";
import About from "./About/About";
import Market from "./Market/Market";
import Design from "./Design/Design";
import Finger from "./Finger/Finger";
import PopularService from "../components/PopularService/PopularService";

const Home = () => {
    return (
        <>
            <Hero />
            <Categories />
            <Card />
            <PopularService></PopularService>
            <Prosper />
            <Video />
            <Business />
            <About />
            <Market />
            <Design />
            <Finger />
        </>
    );
};

export default Home;
