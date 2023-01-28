import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import BasicModal from './Navbar';
import { useState } from 'react';
import { addCity } from '../Store/reducers/weatherstore';
import { useDispatch, useSelector } from 'react-redux';

export default function BasicTextFields() {

  const dispatch = useDispatch();
  const {currentUser} = useSelector((state)=>state.weatherapp);
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('C');

  var obj = {
    city: city,
    tempUnit: temp,
    email: currentUser.email
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(temp);
    dispatch(addCity(obj));

  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 4, width: '25ch', Color: "#565BEA" },
      }}
      noValidate
      autoComplete="off"
    >

      <label className='inputfields'>City </label><br />
      <TextField id="outlined-basic" value={city} onChange={(e) => setCity(e.target.value)} label="Enter city name" variant="outlined" style={{ Color: "#565BEA",marginTop:"0" }} /><br />

     <div style={{display:"flex",flexDirection:"column",marginTop:"0",width:"126%",height:"50%"}}><label className='inputfields' >Temperature Unit </label><br />
      <label htmlFor="TempUnit"></label>
      <select name="TempUnit" style={{width: '70%', height: "50px",paddingLeft:"10px",Color: "#565BEA",marginTop:"30px"}} id="tempUnit" onChange={(e)=>setTemp(e.target.value)}>
      <option>Select</option>
        <option value="C">C</option>
        <option value="F">F</option>
      </select></div>

      <Fab style={{ backgroundColor: "#91b3fa", width: "50px",padding:'30px', marginLeft: "40%",marginBottom:"20%", marginTop:'0'}} size="small" color="primary" aria-label="add">

        <AddIcon onClick={handleClick} />
      </Fab>
    </Box>

  );
}