import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { useSelector } from 'react-redux';

const DetailedInfo = (props) => {

	const emojis = {
		'01d': '☀️',
		'02d': '⛅️',
		'03d': '☁️',
		'04d': '☁️',
		'09d': '🌧',
		'10d': '🌦',
		'11d': '⛈',
		'13d': '❄️',
		'50d': '💨',
		'01n': '☀️',
		'02n': '⛅️',
		'03n': '☁️',
		'04n': '☁️',
		'09n': '🌧',
		'10n': '🌦',
		'11n': '⛈',
		'13n': '❄️',
		'50n': '💨',
	};

	const {currentUser} = useSelector((state)=>state.weatherapp);
	return (
		<div>
			<div className="whole-details-area">
				<h4 style={{ color: "black" }} className='detail-text detail-date'>Weather Forecasts Issued at:</h4>
				<h4 className='detail-text detail-date'>{currentUser.fetchedAt}</h4>
				<h4 style={{textTransform: 'capitalize',fontSize:"30px",color:"#565BEA"}} className='detail-text'>{props.cityInfo.name}</h4>
				<icon style={{  fontSize: "50px", paddingLeft: "37%"}}>{emojis[props.cityInfo.icon]}</icon>
				<h5 style={{ textTransform: 'capitalize',color:"#565BEA" }} className='detail-text'>{props.cityInfo.descr}</h5>

				<Table className="weather-details">
					<TableBody>

						<TableRow>
							<TableCell style={{ color: "#565BEA", fontSize: '15px' }}>Temperature</TableCell>
							<TableCell style={{ color: "#565BEA", fontSize: '15px' }}>{props.cityInfo.temp}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell style={{ color: "#565BEA", fontSize: '15px' }}>Feel Like</TableCell>
							<TableCell style={{ color: "#565BEA", fontSize: '15px' }}>{props.cityInfo.feels}&deg;</TableCell>
						</TableRow>
						<TableRow>
							<TableCell style={{ color: "#565BEA", fontSize: '15px' }}>Pressure</TableCell>
							<TableCell style={{ color: "#565BEA", fontSize: '15px' }}>{props.cityInfo.pressure}%</TableCell>
						</TableRow>
						<TableRow>
							<TableCell style={{ color: "#565BEA", fontSize: '15px' }}>Humidity</TableCell>
							<TableCell style={{ color: "#565BEA", fontSize: '15px' }}>{props.cityInfo.humidity}%</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
		</div>
	)
};

export default DetailedInfo;