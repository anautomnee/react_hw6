import { useState, useEffect } from "react";
import styles from "./UserProfile.module.css";
import profile_pic from "../../assets/user_profile_pic.svg"
import axios from "axios";

function UserProfile() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            setUser(response.data)
        })
        .catch(error => {console.log(error)})
    }, []);

    function fetchUser() {
        setUser(null)
        let random_id = Math.floor(Math.random() * (10 - 1) + 1);
        console.log(random_id)
        axios.get(`https://jsonplaceholder.typicode.com/users/${random_id}`)
        .then(response => {
            setUser(response.data)
        })
        .catch(error => {console.log(error)})
    };

    if (user) {
        return (
            <div className={styles.profile_container}>
                <img className={styles.image} src={profile_pic} alt="user_profile_pic" />
                <h3>{user.name}</h3>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <button className={styles.btn} onClick={fetchUser}>Load new user</button>
            </div>
        );
    } else {
        return (
            <div className={styles.profile_container}>
                <h2>Loading...</h2>
            </div>
        );
    }

};

export default UserProfile;