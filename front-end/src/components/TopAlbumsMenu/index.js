import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link} from "react-router-dom"
import { useState } from 'react';
const TopAlbumsMenu = () => {

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper'}}>
      <Tabs value={value} onChange={handleChange} centered>
      <Link to="/top-albums?from=1&to=100"> <Tab label="1-100" style={{fontSize:'30px'}}/></Link>
      <Link to="/top-albums?from=101&to=200"> <Tab label="101-200" style={{fontSize:'30px'}}/></Link>
      <Link to="/top-albums?from=201&to=300"> <Tab label="201-300" style={{fontSize:'30px'}}/></Link>
      <Link to="/top-albums?from=301&to=400"> <Tab label="301-400" style={{fontSize:'30px'}}/></Link>
      <Link to="/top-albums?from=401&to=500"> <Tab label="401-500" style={{fontSize:'30px'}}/></Link>
      <Link to="/top-albums?from=501&to=700"> <Tab label="more albums" style={{fontSize:'30px'}}/></Link>
      </Tabs>
    </Box>
  )
}

export default TopAlbumsMenu