import React, {useState} from 'react';
import {
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../../config/firebaseConfig';
import {
    Button,
    Paper,
    Divider,
    TextField,
    Box,
    Container,
    Typography, Grid
} from '@mui/material';
import UserLogged from "./UserLogged"
import {Link, useNavigate} from 'react-router-dom';
import {connect} from "react-redux";
import {openSnackbar} from "../../components/SnackBar/actions";

/**
 * Login
 */

function Login(props) {

    const {dispatchOpenSnackbar}=props;
    const [loginObj, setLoginObj] = useState({});
    let navigate = useNavigate();

    const handleLoginChange = type => event => {
        setLoginObj({
            ...loginObj,
            [type]: event.target.value
        })
    }
    const handleLoginClick = async () => {
        const { email, password } = loginObj;
        try {
            const createdUser =  await signInWithEmailAndPassword(auth, email, password)
            navigate("/");

        } catch (errors) {
            dispatchOpenSnackbar('error' , errors.message)
            console.log(errors.message);
        }

    }


    return (
        <Container>
        <Grid container component="main" style={{height: '100%'}}>
            <Grid item
                  xs={false}
                  sm={4}
                  md={7}
                  sx={{
                      backgroundImage: 'url(https://source.unsplash.com/random)',
                      backgroundRepeat: 'no-repeat',
                      backgroundColor: (t) =>
                          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                  }}>
            </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box sx={{ margin: 10 }}>
                    <Typography variant="h4">Login</Typography>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleLoginChange('email')}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleLoginChange('password')}
                    />
                    <Button
                        onClick={handleLoginClick}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Login
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to="/forgot_password" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/create_account" variant="body2">
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
        </Container>
    )

}

const mapStateToProps = state => {
    return {
        ...state.products,
    };
}

const mapDispatchToProps= {
    dispatchOpenSnackbar:openSnackbar
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
