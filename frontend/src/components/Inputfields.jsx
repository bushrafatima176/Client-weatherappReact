import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { pink } from '@mui/material/colors';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AppField from './Fields';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 3, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
       <IconButton size="large" style={{width:"50px"}} aria-label="search" color="inherit">
            <SearchIcon/>
          </IconButton><br/>
      <label className='inputfields'>City </label><br/>
      <TextField id="outlined-basic" label="Enter city name" variant="outlined" /><br/>
      <label className='inputfields'>Temperature Unit </label><br/>
      <TextField id="outlined-basic" label="Enter temperature unit" variant="outlined" /><br />
     
      {/* <Button variant="text" className='btn' ><AddCircleOutlinedIcon fontSize="large" sx={{ color: pink[500] }} /></Button> */}
      <Fab style={{backgroundColor:"Black" ,width:"50px",marginLeft:"7%"}} size="small" color="primary" aria-label="add">

        <AddIcon  />
      </Fab>
      <AppField/>
    </Box>
  
  );
}