import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import CountdownTimer from './CountdownTimer/CountdownTimer';
import NewsSection from './NewsSection/NewsSection';
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
            <NewsSection></NewsSection>
            <CountdownTimer></CountdownTimer>
        </div>
    );
};

export default Homepage;