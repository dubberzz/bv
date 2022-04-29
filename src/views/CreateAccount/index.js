import React, { useState} from 'react';
import {
    createUserWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../../config/firebaseConfig';
import {Box, TextField, Button, Typography, Container, Divider, Grid, Paper} from '@mui/material';
import {openSnackbar} from "../../components/SnackBar/actions";
import {connect} from "react-redux";
import { useNavigate} from 'react-router-dom';

function CreateAccount(props) {
    const {dispatchOpenSnackbar}=props;
    const [userCreateObj, setUserCreateObj] = useState({});
    let navigate = useNavigate();

    const handleCreateChange = type => event => {
        setUserCreateObj({
            ...userCreateObj,
            [type]: event.target.value
        })

    }
    const handleCreateClick = async () => {

        const { email, password } = userCreateObj;
        try {
            const createdUser =  await createUserWithEmailAndPassword(auth, email, password)
            navigate("/");
        } catch (errors) {
            dispatchOpenSnackbar('error' , errors.message)
            console.log(errors.message);

        }
    }

    return(

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
                        <Typography variant="h4">Create Account</Typography>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handleCreateChange('email')}
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
                            onChange={handleCreateChange('password')}
                        />
                        <Button onClick={handleCreateClick}>Create account</Button>
                        <Typography>{}</Typography>
                    </Box>
                    <Divider />
                </Grid>
            </Grid>
        </Container>
)
}

const mapDispatchToProps= {
    dispatchOpenSnackbar:openSnackbar
}

export default connect(null, mapDispatchToProps)(CreateAccount)
