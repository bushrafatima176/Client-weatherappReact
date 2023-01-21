import React from 'react';
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  CenteredTabs from "./components/Navbar"
import Loginnew from "./components/Signin";
import Signupnew from "./components/Signup";
import DashboardApp from "./components/Dashboard"
import BasicTextFields from './components/Inputfields';
import MediaCard from "./components/Card"

const App = () => {
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