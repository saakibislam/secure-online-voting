import React from 'react';
import CountdownTimer from './CountdownTimer/CountdownTimer';
import Feedback from './Feedback/Feedback';
import NewsSection from './NewsSection/NewsSection';
import PhotoSection from './PhotoSection/PhotoSection';
import Slider from './Slider/Slider';

const Homepage = () => {

    return (
        <div>
            <Slider></Slider>
            <CountdownTimer></CountdownTimer>
            <NewsSection></NewsSection>
            <PhotoSection></PhotoSection>
            <Feedback></Feedback>
        </div>
    );
};

export default Homepage;