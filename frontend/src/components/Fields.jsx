import BasicModal from "./Navbar"
import { useSelector } from "react-redux";


const AppField = () => {
    const { currentUser, loader } = useSelector((state) => state.weatherapp);
    return (
        !loader ? 
        <>
        
            <div style={{width: '300px'}} className="app-field">
                {currentUser.city.map((cityInfo, i) => {
                    if (cityInfo !== undefined) {
                        return ( <label style={{textTransform: 'capitalize'}}>{cityInfo.name} <BasicModal cityInfo={cityInfo} /> </label>)
                    }
                })}
            </div> 
        </>: <h1>Loading..</h1>)
}

export default AppField;