import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import CountdownTimer from './CountdownTimer/CountdownTimer';
import Feedback from './Feedback/Feedback';
import NewsSection from './NewsSection/NewsSection';
import PhotoSection from './PhotoSection/PhotoSection';
import Slider from './Slider/Slider';

const Homepage = () => {
    const { getUser } = useAuth();
    const [user, setUser] = useState();

    useEffect(() => {
        setUser(getUser());
    }, [])

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