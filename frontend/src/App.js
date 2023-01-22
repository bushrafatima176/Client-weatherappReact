import React from 'react';
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  CenteredTabs from "./components/Navbar"
import Loginnew from "./components/Signin";
import Signupnew from "./components/Signup";
import DashboardApp from "./components/Dashboard"
import BasicTextFields from './components/Inputfields';
import MediaCard from "./components/Card"
// import {io} from 'socket.io-client';
// const socket = io.connect("http://localhost:3001/");

const App = () => {

  // useEffect(() => {
  //   socket.emit("chat","insia");
  // }, []);
  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loginnew/>} />
        <Route path='/signup' element={<Signupnew />} /> 
        <Route path='/dashboard' element ={<DashboardApp />}/>

       </Routes>
    </BrowserRouter> 


    </>
  )
}

export default App;