import BasicTextFields from "./Inputfields";
import AppField from './Fields';
import BasicModal from "./Navbar"
const DashboardApp = ()=>{
    return(
        <><div style={{display:"flex",flexDirection:"row" , padding:"20%"}}>
        <div style={{display:"flex",flexDirection:"row"}}>
        <BasicTextFields/> </div> 
         <BasicModal/>  <div>
        </div>
        </div>
       </>
    )
}

export default DashboardApp;