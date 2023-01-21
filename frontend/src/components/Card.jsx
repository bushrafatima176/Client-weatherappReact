import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const DetailedInfo = () => (<div>
	<div className="whole-details-area">
   <h4 className='detail-text detail-date'>Weather Forecasts Issue:</h4>
    <h4 className='detail-text'>Name</h4>
    <icon></icon>
      <h5 className='detail-text'>Description</h5>
    
		<Table className="weather-details">
			<TableBody>
     
    <TableRow> 
					<TableCell style={{color:"white",fontSize: '20px' }}>Temperature</TableCell>
					<TableCell style={{color:"white",fontSize: '20px'}}>&deg;</TableCell>
				</TableRow>
				<TableRow>
					<TableCell  style={{color:"white",fontSize: '20px'}}>Feel Like</TableCell>
					<TableCell style={{color:"white",fontSize: '20px'}}>&deg;</TableCell>
				</TableRow>
        <TableRow>
					<TableCell  style={{color:"white",fontSize: '20px'}}>Pressure</TableCell>
					<TableCell style={{color:"white",fontSize: '20px'}}>%</TableCell>
				</TableRow>
				<TableRow>
					<TableCell  style={{color:"white",fontSize: '20px'}}>Humidity</TableCell>
					<TableCell style={{color:"white",fontSize: '20px'}}>%</TableCell>
				</TableRow>
				<TableRow>
					<TableCell  style={{color:"white",fontSize: '20px'}}>Wind Speed</TableCell>
					<TableCell style={{color:"white",fontSize: '20px'}}></TableCell>
				</TableRow>
			
			</TableBody>
		</Table>
	</div>
  </div>
);

export default DetailedInfo;