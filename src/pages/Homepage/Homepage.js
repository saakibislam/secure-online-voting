import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
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
        </div>
    );
};

export default Homepage;