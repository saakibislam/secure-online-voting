import { useState } from "react";

const useAuth = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Fetching User from DB
    const fetchUser = (nid) => {
        setIsLoading(true);
        const url = `http://localhost:5000/login?nid=${nid}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data != null) {
                    updateUserOnStorage(data);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    // Use for login
    const loginWithNid = (nid) => {
        setIsLoading(true);
        const url = `http://localhost:5000/login?nid=${nid}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data != null) {
                    updateUserOnStorage(data);
                    setIsSuccess(true)
                    window.location.replace("http://localhost:8989/")
                    setIsInvalid(false)
                } else {
                    setIsInvalid(true);
                    setIsSuccess(false);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    // Get User from Local Storage
    const getUser = () => {
        const userData = JSON.parse(localStorage.getItem('user'));
        return userData;
    }

    // Update User Data on Local Storage
    const updateUserOnStorage = (data) => {
        const foundUser = getUser(); // check if any user exist in storage

        if (foundUser) {
            localStorage.setItem('user', JSON.stringify(data));
        }
        else {
            localStorage.setItem('user', JSON.stringify(data));
        }
    }

    // Removing User Data on Storage
    const clearUser = () => {
        localStorage.removeItem('user');
        window.location.replace('/');
    }



    return {
        fetchUser,
        getUser,
        updateUserOnStorage,
        clearUser,
        isLoading,
        setIsLoading,
        loginWithNid,
        isInvalid,
        isSuccess
    }
}

export default useAuth;