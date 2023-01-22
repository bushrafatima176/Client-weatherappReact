import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loginnew from "./components/Signin";
import Signupnew from "./components/Signup";
import DashboardApp from "./components/Dashboard"
import {io} from 'socket.io-client';
const socket = io.connect("http://localhost:3001/");

const App = () => {

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loginnew socket={socket}/>} />
        <Route path='/signup' element={<Signupnew />} /> 
        <Route path='/dashboard' element ={<DashboardApp socket={socket} />}/>

       </Routes>
    </BrowserRouter> 


    </>
  )
}

export default App;