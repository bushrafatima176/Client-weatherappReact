import React from 'react';
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  CenteredTabs from "./components/Navbar"
import Loginnew from "./components/Signin";
import Signupnew from "./components/Signup";
import BasicTextFields from './components/Inputfields';
import MediaCard from "./components/Card"
import BasicTabs from "./components/Navbar"
const App = () => {
  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path='/' element={<BasicTabs />} />
        {/* <Route path='/login' element={<Loginnew/>}/>
        <Route path='/signup' element={<Signupnew />} /> */}
        {/* <Route path='/dashboard' element={<Welcome />} /> */}
       </Routes>
    </BrowserRouter> 
 {/* <BasicTabs/> */}

    </>
  )
}

export default App;