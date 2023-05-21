import React from 'react';
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
    return (
        <div className='auth'>
            <h1>Login</h1>
            <form >
                <input required type="username" placeholder='username' />
                <input required type="password" placeholder='password' />
                <button>Login</button>
                <p>This is an Error!</p>
                <span>
                    Don't you have an account? <Link to="/register">Register</Link>
                </span>
            </form>
        </div>
    )
} 

export default Login