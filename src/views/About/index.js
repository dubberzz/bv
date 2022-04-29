import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {setEmail} from './actions';
import {firebaseGetProducts} from "../../services/firebaseServices";
import {Link} from 'react-router-dom'
import { Button } from '@mui/material';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function About(props) {

    useEffect(() => {

        props.dispatchSetEmail("adrian@gmail.com")

    }, [])

    return (
        <div className='container'>
            <Link to='/'>
            <Button
                to={`/`}
                variant="outlined"
            ><ArrowBackIcon fontSize="small" />Back</Button>
            </Link>
            <p> About </p>
        </div>
    )
}

const mapStateToProps = state => {
    console.log('About',state);
    return {
        email: state.email
    }
}
const mapDispatchToProps = {
    dispatchSetEmail:setEmail
}

export default connect(mapStateToProps,mapDispatchToProps)(About);
