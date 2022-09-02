import React from 'react'
import { Box } from "@mui/material"
import {IconButton} from '@mui/material/';
import { AccessTimeSharp, PlaceSharp, PhoneSharp, AccountCircleSharp, ShoppingCartSharp, SearchSharp } from '@mui/icons-material/';

import './TopBar.scss'

const TopBar = () => {
    return (
        <div className='top-bar'>
            <div className="top-bar-info">
                <Box className='item'>
                    <AccessTimeSharp />
                    <span>Monday - Friday 9AM - 5PM</span>
                </Box>
                <Box className='item'>
                    <PlaceSharp />
                    <span>2491  Daffodil Lane, LA</span>
                </Box>
                <Box className='item'>
                    <PhoneSharp />
                    <span>(+1) 923 2341 22</span>
                </Box>
            </div>
            <div className="top-bar-icons">
                <IconButton>
                    <AccountCircleSharp />
                </IconButton>
                <IconButton>
                    <ShoppingCartSharp />
                </IconButton>
                <IconButton>
                    <SearchSharp />
                </IconButton>
            </div>
        </div>
    )
}

export default TopBar