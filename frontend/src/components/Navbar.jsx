
// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Home from "./Home"
// import { textAlign } from '@mui/system';
// import { Link } from 'react-router-dom';
// import Signupnew from "./Signup";
// import Loginnew from "./Signin";


// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// export default function BasicTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' ,backgroundColor:"White"}}>
//       <Box sx={{ borderBottom: 2,backgroundColor:"#B4ECE3",borderColor: 'divider', paddingLeft:"40%" }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab label="Home" {...a11yProps(0)} />
//           <Tab label="Sign in" {...a11yProps(1)} />
//           <Tab label="Sign up" {...a11yProps(2)} />
//         </Tabs>
//       </Box>
//       <TabPanel value={value} index={0}>
//        <Home/> 
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         <Loginnew/>
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//       <Signupnew/>
//       </TabPanel>
//     </Box>
//   );
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DetailedInfo from "./Card"
import AppField from './Fields';
import LabelName from "./Label"
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'transparent',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius:10,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}><LabelName Label="Karachi"/></Button><br/>
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <DetailedInfo/>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}