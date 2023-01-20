import AppField from "./Fields"
const Home=()=>{
    return(
    <><div style={{ backgroundColor :"#7cc0d8",
        width: "100%",
        height :"100vh"
     } } className="home-container">
            <div className="home-dis">
                 <h1 className="main-heading">
                Weather App
            </h1>
            <AppField />
            </div>
           
        </div>
        </>
    )
}

export default Home;