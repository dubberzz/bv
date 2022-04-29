import {Box, Button, Container} from "@mui/material";
import {Link, NavLink} from "react-router-dom";
import React from "react";
import bike from '../../images/bikehomepage.jpg';
import {makeStyles} from "@mui/styles";

import bike1 from '../../assets/bike1.png';
import bike2 from '../../assets/bike2.png';

const useStyles = makeStyles({

    containerStyle: {
        height: '100%',
        width: '100%',
        backgroundImage: `url(${bike})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        padding: 0,
        flex: 'auto'
    }

});

function Home({log}) {
    const classes = useStyles();

    return (
        <form>
        <div className={classes.containerStyle} >
            <Box sx={{
                width: 800,
                height: 700,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'primary.blue',
                margin: '200px 250px 450px 470px',
                '&:hover': {
                    backgroundColor: 'primary.blue',
                    opacity: [0.9, 0.8, 0.7],
                },
            }}>
            
                <h1>Welcome to our website</h1>
                {log &&
                <button  className="btn" style={{backgroundColor : '#33ccff'}}>
                    <NavLink to="/products">Produsele noastre</NavLink>
                </button>}
                {!log &&
                <Link to="/login">
                    <Button>Press for Login</Button>
                </Link>}
                {!log &&
                    <h1>Please login</h1>}
                <h3>
                    Informatii despre noi
                    <center>
                    <p><i class="arrow down"></i></p>
                    <p><i class="arrow down"></i></p>
                    </center>
                </h3>
            
            </Box>
        </div>
        <div className="container3" style={{float: "right"}}>
            <h2>
                Informatii despre magazin:
            </h2>
            <h3>
                Happy Sport , Str. Vasile Alecsandri nr. 41 
            </h3>
            <h3>
                Loc. Bacau, Jud. Bacau Orar Luni-Vineri 9-18 
            </h3>
        </div>
        <div className="container3">
            <center>
            <h2>
                Galerie:
            </h2>
            <img src={bike1} className='img'></img>
            <img src={bike2} className='img'></img>
            </center>
        </div>
        <footer style={{ color: "white" }} >
            a
        </footer>
        </form>
    );
}

export default Home;