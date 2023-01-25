import MediaCard from "./DashboardDesign"
import image from "./Images/weather.png"
import { useEffect } from "react";
import { currentuser } from "../Store/reducers/weatherstore";
import { useDispatch, useSelector } from "react-redux";


const DashboardApp = (props) => {

    const {currentUser} = useSelector((state)=>state.weatherapp);
    const username = currentUser.username;
    const dispatch = useDispatch();
    useEffect(() => {
        props.socket.on('dataupdated', (data) => {
            dispatch(currentuser(data));
        })
    })
    return (
        <>

            <h1 style={{ textAlign: "center", color: "#565BEA", fontSize: "40px", marginTop: "50px" }} c>
                Weather App
            </h1>
            <h3 style={{backgroundColor: 'black', textAlign: 'center', padding:'7px'}}>{username}</h3>
            <button style={{ marginLeft: "90%", marginBottom: "7px", backgroundColor: "#565BEA", width: "5%", padding: "5px", marginTop:'4px' }}>
                <a style={{ textDecoration: "none", color: "white" }} href="/">Log out</a>
            </button>
            <br />
            <div style={{ display: "flex", flexDirection: "row" }}>
                <MediaCard />
                <img src={image} style={{ width: "35%", paddingLeft: "10%", paddingBottom: "50%" }} />
            </div>

        </>

    )
}

export default DashboardApp;