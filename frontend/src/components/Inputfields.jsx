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
  const [temp, setTemp] = useState('');

  var obj = {
    city: city,
    tempUnit: temp,
    email: currentUser.email
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addCity(obj));

  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '25ch', Color: "#565BEA" },
      }}
      noValidate
      autoComplete="off"
    >

      <label className='inputfields'>City </label><br />
      <TextField id="outlined-basic" value={city} onChange={(e) => setCity(e.target.value)} label="Enter city name" variant="outlined" style={{ Color: "#565BEA" }} /><br />
      <label className='inputfields'>Temperature Unit </label><br />
      <label for="Tempunit"></label>
      <select name="TempUnit" id="cars" onChange={(e)=>setTemp(e.target.value)}>
        <option value="C">C</option>
        <option value="F">F</option>
      </select>

      <Fab style={{ backgroundColor: "#91b3fa", width: "50px", marginLeft: "40%" }} size="small" color="primary" aria-label="add">

        <AddIcon onClick={handleClick} />
      </Fab>
      <BasicModal />
    </Box>

  );
}