import React, {useState } from 'react';
import Navbar from '../../components/Navbar';
import { Grid , Container} from '@mui/material';
import {Link, Outlet} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import Snackbar from '../../components/SnackBar/index';
import {onAuthStateChanged} from 'firebase/auth';
import { auth } from '../../config/firebaseConfig';
import { UserContext} from '../../components/context/UserContext'

const useStyles = makeStyles({
    contentContainer: {
        '&.MuiContainer-root': {
        flex: 'auto',
        height: '100%',
        width: '100%',
        maxWidth: "100%",
        paddingLeft: 0,
        paddingRight: 0
    }
   }
})
function GlobalWrapper(props) {
    const { children } = props;
    const classes = useStyles();
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
    const [authUser, setAuthUser ] = useState()

    onAuthStateChanged(auth, (currentUser) => {
        return setAuthUser(currentUser);
    })

    const drawerToggleClickHandler=() => {
        setSideDrawerOpen(!sideDrawerOpen)
    }

    return (
        <div
            style={{height: '100%',width: '100%'}}
            align={'flex-start'}
        >
           <Container className={classes.contentContainer}>
               <Snackbar/>
               <UserContext.Provider value={authUser}>
                   {children}
               </UserContext.Provider>
               <Outlet/>
           </Container>
        </div>

    );
}

export default GlobalWrapper;
