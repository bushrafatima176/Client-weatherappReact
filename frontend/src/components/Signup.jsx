import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
// import { registerUser } from "../store/reducers/UserReducer";
import {addUser} from '../Store/reducers/weatherstore';
import userIcon from "./Images/user1.png"
import './login.css';

const Signupnew = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    var obj = {
        email: email,
        username: username,
        password: password
    };

    function setData(e) {
        e.preventDefault();

        if (email!=="" && username !== "" && password !== "") {
            dispatch(addUser(obj));
            setEmail('');
            setUsername('');
            setPassword('');
            //navigate('/');
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
                            type="text"                           
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username" />
                        <input                        
                            type="password"           
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />

                    </div>
                    <input onClick={setData} type="submit" name="" value="Signup" />
                </form>
                <div className="text-center">
                </div>
            </div>
        </>
    )
}

export default Signupnew;