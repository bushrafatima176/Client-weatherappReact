import AppField from "./Fields"
const Home=()=>{
    return(
    <><div style={{ backgroundImage:`url("https://i.pinimg.com/originals/56/92/a6/5692a6ad885acf2b870911694ad1b010.gif")`,background:"no repeat",
        width: "100%",
        height :"100vh",
        border:"5px solid Black",
        borderRadius:"20px"
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