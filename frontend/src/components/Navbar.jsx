// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Home from "./Home"


// export default function CenteredTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
//       <Tabs value={value} onChange={handleChange} centered>
//         <Tab label="Home" />
//         <Tab label="Sign in"/>
//         <Tab label="Sign up" />
//       </Tabs>
//     </Box>
//   );
// }

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Home from "./Home"
import { textAlign } from '@mui/system';
import { Link } from 'react-router-dom';
import Signupnew from "./Signup";
import Loginnew from "./Signin";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' ,backgroundColor:"White"}}>
      <Box sx={{ borderBottom: 2,backgroundColor:"#B4ECE3",borderColor: 'divider', paddingLeft:"40%" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Sign in" {...a11yProps(1)} />
          <Tab label="Sign up" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
       <Home/> 
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Loginnew/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Signupnew/>
      </TabPanel>
    </Box>
  );
}
