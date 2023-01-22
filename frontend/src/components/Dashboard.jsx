import MediaCard from "./DashboardDesign"
import image from "./Images/weather.png"
import BasicModal from "./Navbar"
import { Link, redirect } from 'react-router-dom';


const DashboardApp = () => {
    return (
        <>
            <h1 style={{ textAlign: "center", color: "#565BEA", fontSize: "40px", marginTop: "50px" }} c>
                Weather App
            </h1>
            <br />
            <div style={{ display: "flex", flexDirection: "row" }}> <MediaCard />
                <img src={image} style={{ width: "40%", paddingLeft: "80px" }} /></div>

        </>




    )
}

export default DashboardApp;