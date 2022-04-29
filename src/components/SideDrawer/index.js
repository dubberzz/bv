import React, {useState} from 'react';
import {Box, List, SwipeableDrawer} from "@mui/material";
import {NavLink} from "react-router-dom";
import Button from '../Button'

const SideDrawer = (props) => {
    const { open, onToogleDrawer } = props;
    const toggleDrawer = () => {
        onToogleDrawer()
    }
    return (
        <SwipeableDrawer
                         anchor="left"
                         open={open}
                         onClose={toggleDrawer}
                         onOpen={toggleDrawer}
        >
            Drawer
            <Box
                sx={{ width: 200 }}
                role="presentation"
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}
            >
            <List >
                <li ><NavLink to="/products">Products
                   </NavLink>
                </li>
                <li ><NavLink to="/about">About
                   </NavLink>
                </li>
            </List>
            </Box>
        </SwipeableDrawer>
    );
};

export default SideDrawer;