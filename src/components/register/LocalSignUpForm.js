import React, { useState } from "react";
import axios from 'axios'
const LocalSignUpForm = ()=> {
    const [user, setUser] = useState ({
        email: "",
        password: ""
    });

    const handleChanges = e => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('https://apidevnow.com/register',user)
        .then(res => console.log(res.data))
    };

    return(
        <div>
            <form onSubmit ={handleSubmit}>
                <input 
                type="text"
                name="email"
                placeholder="Enter Your Email Address Here"
                onChange={handleChanges}
                />
                <input 
                type="password"
                name ="password"
                placeholder="Create Your Password"
                onChange={handleChanges}
                />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
};

export default LocalSignUpForm;