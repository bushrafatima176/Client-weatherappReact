import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { pink } from '@mui/material/colors';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'celsius ',
    label: 'C',
  },
  {
    value: 'fahrenheit',
    label: 'F',
  },

  
];



export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    
      <label className='inputfields'>City </label><br/>
      <TextField id="outlined-basic" label="Enter city name" variant="outlined" /><br/>
      <label className='inputfields'>Temperature Unit </label><br/>
      <TextField
          id="outlined-select-unit"
          select
          label="Select"
          defaultValue="unit"
         
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
  
     
      {/* <Button variant="text" className='btn' ><AddCircleOutlinedIcon fontSize="large" sx={{ color: pink[500] }} /></Button> */}
      <Fab style={{backgroundColor:"Black" ,width:"50px",marginLeft:"40%"}} size="small" color="primary" aria-label="add">

        <AddIcon  />
      </Fab>
      
    </Box>
  
  );
}