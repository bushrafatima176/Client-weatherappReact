import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { currentUser, readUser, loggingIn } from '../Store/reducers/weatherstore';
import userIcon from "./Images/user.png";
import "./login.css"

const Loginnew = () => {

    const dispatch = useDispatch();
    dispatch(loggingIn(false));
    dispatch(currentUser({}));
    let navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    var obj = {
        email: email,
        password: password
    };

    const validate = (e) => {
        e.preventDefault();

        if (email !== '' && password !== '') {
            dispatch(readUser(obj));
            setEmail('');
            setPassword('');
            alert('successfully logged in');
            navigate('/dashboard');
        }
        else {
            alert('input fields must not be empty');
        }

    }

    return (
        <>
        
            <div className="loginBox">
                <img className="user" src={userIcon} height="100px" width="100px" />
                <h3>Sign-In</h3>
                <form>
                    <div className="inputBox">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <input onClick={validate} type="submit" name="" value="Login" />
                </form>
                <div className="text-center">

                </div>
                  <div className="text-center">
                    <Link style={{textAlign:"center"}} to="/Signup">Sign-up</Link>
                </div>
            </div>
        </>
    )
}

export default Loginnew;