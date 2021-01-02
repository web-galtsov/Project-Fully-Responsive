import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
//import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import InfoSection from "../infoSection";
import { homeObjOne, homeObjTwo, homeObjThree } from "../infoSection/Data";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
        </>
    );
};
export default Home;