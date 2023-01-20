import AppField from "./Fields"
<<<<<<< HEAD
const Home=()=>{
    return(
    <><div style={{ backgroundImage:`url("https://i.pinimg.com/originals/56/92/a6/5692a6ad885acf2b870911694ad1b010.gif")`,background:"no repeat",
        width: "100%",
        height :"100vh",
        border:"5px solid Black",
        borderRadius:"20px"
     } } className="home-container">
=======
const Home = () => {
    return (

        <><div style={{
            backgroundColor: "#7cc0d8",
            width: "100%",
            height: "100vh"
        }} className="home-container">
>>>>>>> 359d9f89b48e258ca92ff64a51e6c15a8dc4dc20
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