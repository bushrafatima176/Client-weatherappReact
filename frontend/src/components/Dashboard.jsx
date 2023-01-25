import MediaCard from "./DashboardDesign"
import image from "./Images/weather.png"
import { Link} from 'react-router-dom';
import { useEffect } from "react";
import { currentUser } from "../Store/reducers/weatherstore";
import { useDispatch } from "react-redux";


const DashboardApp = (props) => {

    const dispatch = useDispatch();
    useEffect(()=>{
        props.socket.on('dataupdated', (data)=>{
            dispatch(currentUser(data));
        })
    })
    return (
        <>
      
            <h1 style={{ textAlign: "center", color: "#565BEA", fontSize: "40px", marginTop: "50px" }} c>
                Weather App
            </h1> <button style={{marginLeft:"90%",marginBottom:"7px",backgroundColor:  "#565BEA",width:"5%",padding:"5px"}}> <Link style={{ textDecoration:"none",color: "white" }} to="/">Log out</Link></button>
            <br />
            <div style={{ display: "flex", flexDirection: "row" }}> <MediaCard />
                <img src={image} style={{width: "35%", paddingLeft: "10%",paddingBottom:"50%" }} /></div>

        </>

    )
}

export default DashboardApp;