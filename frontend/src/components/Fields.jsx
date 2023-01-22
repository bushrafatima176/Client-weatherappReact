import { getCityData } from "../Store/reducers/weatherstore";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const AppField = () => {

    const dispatch = useDispatch();
    const { currentCity } = useSelector((state) => state.weatherapp)
    var temp = 0;

    useEffect(() => {
        dispatch(getCityData({ city: 'karachi' }));
    }, []);
    return (
        <>
            <div className="app-field">
                <label>{currentCity.name}  {currentCity.temp}</label> <br />
                <label>Lahore</label><br />
                <label>Islamabad</label><br />
                <label>Quetta</label><br />
                <label>Peshawar</label><br /></div>


        </>
    )
}

export default AppField;