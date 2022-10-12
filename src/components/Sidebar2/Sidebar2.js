import React, {useState} from "react";


import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';

import Link from '@mui/material/Link';

import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';


import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {useLocation, useNavigate} from "react-router-dom";


export function Sidebar2(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const userMail = localStorage.getItem('userMail');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    return (

        <div style={{display: 'flex', marginTop: 70}}>

            <Stack spacing={2}>
                <Item> <Link href="#"> <BusinessCenterIcon fontSize="large"/> </Link></Item>
                <Item> <Link href="#"> <LocalOfferIcon fontSize="large"/> </Link></Item>


                <Item> <Link href="#"> < NewspaperIcon fontSize="large"/> </Link></Item>

                <Item> <Link href="#"> <CalendarMonthIcon fontSize="large"/> </Link></Item>
                <Item> <Link href="#"> <AccountBoxIcon fontSize="large"/> </Link></Item>

                <Item> <Link href="/"> <LogoutIcon fontSize="large"/> </Link></Item>


            </Stack>

        </div>


    );
}