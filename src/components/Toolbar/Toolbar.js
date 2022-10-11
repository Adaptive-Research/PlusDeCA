import React, {useState} from "react";


import Link from '@mui/material/Link';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TableRowsIcon from '@mui/icons-material/TableRows';






import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {useLocation, useNavigate} from "react-router-dom";





export function Toolbar(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const userMail = localStorage.getItem('userMail');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (

 
<div style={{display: 'flex', justifyContent: 'start', marginTop: 5}}>
<Link href="#"> <AddIcon fontSize="large"/></Link>
<Link href="#"> <TableRowsIcon fontSize="large"/></Link>

<Link href="#"> <CalendarMonthIcon fontSize="large"/></Link>
<Link href="#"> <AccessAlarmsIcon fontSize="large"/></Link>
</div>        



    );
}
