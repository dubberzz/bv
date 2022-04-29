import React,{useContext,useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {makeStyles} from "@mui/styles";
import {AppBar, IconButton, Toolbar, Typography, Menu, MenuItem, Container, Avatar, Tooltip} from "@mui/material";
import SideDrawer from '../SideDrawer';
import logo from '../../images/logobikenew.png';
import {UserContext} from '../context/UserContext';
import {signOut} from 'firebase/auth';
import { auth } from '../../config/firebaseConfig';
import { blue } from '@mui/material/colors';

const useStyles = makeStyles({
    active: {
        backgroundColor: blue,
    },
    toolbar: {
        position:"fixed",
        flexDirection: "row",
        width: '100%',
        height: 56,
        display: "inline"
    },
    appBar: {
        height: 60,
    },
    list: {
        listStyle: "none",
        marginLeft: 'auto',
        display: "flex",
        gap: "30px"
    },
    drawersipe: {
        swipeAreaWidth: 1000
    },
    searchBar: {
        align: "center",
        display: 'flex',
        flex: 'auto',
        marginLeft: 0,
    }

});



const Navbar = ({ log }) => {
    const userContext  = useContext(UserContext);
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [ open , setOpen] = useState(false);
    const isMenuOpen = Boolean(anchorEl);
    const toggleDrawer = () => {
        setOpen(!open)
    }
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleLogout = () => {
        signOut(auth);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {log &&
            <MenuItem onClick={handleMenuClose}>
                <NavLink to="/account"> My account
                </NavLink>
            </MenuItem>}
            {log &&
            <MenuItem onClick={handleLogout}>
                <div>Logout</div>
            </MenuItem> }
            {!log &&
                <MenuItem >
                    <NavLink to="/login">
                        Login
                    </NavLink>
                </MenuItem>
            }
        </Menu>
    );

    return(
        <>
            <AppBar position="static" className={classes.appBar}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters className={classes.toolbar}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer}
                        >
                            <div>
                            <p><i class="arrow left"></i></p>
                            </div>
                        </IconButton>
                    <IconButton component={Link} to="/">
                        <Typography align='center' variant='inline' component="div" sx={{ margin: 5 }}  >
                            <img src={logo} width="50" height="50" alt=""/>
                        </Typography>
                    </IconButton>
                    {log &&
                        <ul className={classes.list}>
                            <li><NavLink to="/products" className={({ isActive }) => { return isActive ? classes.active : ""}}>Produse</NavLink></li>
                            <li><NavLink to="/about" className={({ isActive }) => { return isActive ? classes.active : ""}}>Despre</NavLink></li>
                            <li><NavLink to="/trasee" className={({ isActive }) => { return isActive ? classes.active : ""}}>Trasee</NavLink></li>
                            <li><NavLink to="/rent" className={({ isActive }) => { return isActive ? classes.active : ""}}>Inchirieri</NavLink></li>
                            <li><NavLink to="/admin" className={({ isActive }) => { return isActive ? classes.active : ""}}>Admin</NavLink></li>
                        </ul>
}
                        <IconButton
                            style={{marginRight: 20}}
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <Tooltip title={userContext?.email || ''}>
                                <Avatar/>
                            </Tooltip>
                        </IconButton>

                    </Toolbar>
                </Container>
            </AppBar>
            {renderMenu}
            <div>
            <SideDrawer onToogleDrawer={toggleDrawer} open={open}/>
            </div>
        </>

    )
}

export default Navbar;

