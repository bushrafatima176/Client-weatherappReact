import BasicModal from "./Navbar"
const AppField = ()=>{
    return(
<>
<div className="app-field"><label >Karachi<BasicModal/> </label> <br/>
<label>Lahore <BasicModal/> </label><br/>
<label>Islamabad</label><br/>
<label>Quetta</label><br/>
<label>Peshawar  </label><br/></div>
</>)}


{/* const AppField = () => {

    const dispatch = useDispatch();
    const { currentCity } = useSelector((state) => state.weatherapp)
    var temp = 0;

    useEffect(() => {
        dispatch(getCityData({ city: 'karachi' }));
    }, []);
    return (
        <>
            <div className="app-field">
                <label>Karachi</label> <br />
                <label>Lahore</label><br />
                <label>Islamabad</label><br />
                <label>Quetta</label><br />
                <label>Peshawar</label><br /></div>


        </>
    )
} */}

export default AppField;