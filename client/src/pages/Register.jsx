import React from 'react';
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
    return (
        <div className='auth'>
            <h1>Register</h1>
            <form >
                <input required type="username" placeholder='username' />
                <input required type="email" placeholder='email' />
                <input required type="password" placeholder='password' />
                <button>Register</button>
                <p>This is an Error!</p>
                <span>
                    Do you have an account? <Link to="/login">Login</Link>
                </span>
            </form>
        </div>
    )
} 

export default Register