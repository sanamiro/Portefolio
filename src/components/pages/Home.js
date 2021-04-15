import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import Icons from '../Icons';
import TimeLine from '../TimeLine';

function Home() {
    return (
        <>
            <HeroSection />
            <Icons />
            <TimeLine />
            <Cards />
            <Footer/>
        </>
    )
}

export default Home;