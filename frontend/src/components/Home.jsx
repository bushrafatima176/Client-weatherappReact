import AppField from "./Fields"
import DetailedInfo from "./Card"
const Home=()=>{
    return(
    <><div style={{
        width: "100%",
        height :"100vh",
        border:"5px solid Black",
        borderRadius:"20px"
     } } className="home-container">
            <div className="home-dis">
                <h1 className="main-heading">
                    Weather App
                </h1>
                <DetailedInfo />
            </div>
        </div>
        </>
    )
}

export default Home;