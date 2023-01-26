import MediaCard from "./DashboardDesign"
import image from "./Images/weather.png"
import { useEffect } from "react";
import { currentuser } from "../Store/reducers/weatherstore";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const DashboardApp = (props) => {

    let navigate = useNavigate();
    const {currentUser, loader, isError} = useSelector((state)=>state.weatherapp);
    const username = currentUser.username;
    const dispatch = useDispatch();
    useEffect(() => {
        props.socket.on('dataupdated', (data) => {
            dispatch(currentuser(data));
        })
    })
    return !isError ? (!loader ?
        <>

            <h1 style={{ textAlign: "center", color: "#565BEA", fontSize: "40px", marginTop: "30px" }} c>
                Weather App
            </h1>
            <h3 style={{backgroundColor: '#91b3fa', textAlign: 'center', padding:'7px'}}>{username}</h3>
            <button style={{ marginLeft: "90%", marginBottom: "7px", backgroundColor: "#565BEA",borderColor:"#91b3fa", width: "5%", padding: "5px", marginTop:'4px' }}>
                <a style={{ textDecoration: "none", color: "white" }} href="/">Log out</a>
            </button>
            <br />
            <div style={{ display: "flex", flexDirection: "row" }}>
                <MediaCard />
                <img src={image} style={{ width: "35%", paddingLeft: "5%", paddingBottom: "50%" }} />
            </div>

        </>: <h1>Loading...</h1>): (navigate('/'))
}

export default DashboardApp;