
const useAuth = () => {

    // Fetching User from DB
    const fetchUser = (nid) => {
        const url = `http://localhost:5000/login?nid=${nid}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data != null) {
                    updateUserOnStorage(data);
                }
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
            // TODO replace user on localStorage
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
        clearUser
    }
}

export default useAuth;