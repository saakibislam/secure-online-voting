import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Homepage = () => {
    const { getUser } = useAuth();
    const [user, setUser] = useState();

    useEffect(() => {
        setUser(getUser());
    }, [])

    return (
        <div>
            <h1>This is home</h1>
            <h2>Welcome: {user?.name}</h2>
        </div>
    );
};

export default Homepage;