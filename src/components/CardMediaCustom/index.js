import React,{useState,useEffect} from 'react';

import { Container, CardMedia } from '@mui/material';

import {getImage} from './actions';
import Loading from '../Loading/index';

import {connect} from "react-redux";
import BrokenImage from "../BrokenImage";

function CardMediaCustom(props) {
    const [loading,setLoading]=useState(false);
    const [picture,setPicture]=useState(null);
    const [error,setError]=useState(null);
    const {id,dispatchGetImage}=props;
    console.log(picture);

    const callback = pic => {
        setLoading(false);
        setPicture(pic);
    }
    useEffect( () => {
        setLoading(true);
        dispatchGetImage(id, callback);
    },[])

    const handleImageError = () => {
        setError(true);
    };

    if(loading) {
        return(
            <Loading/>
        )
    }
    if(error) {
        return <BrokenImage height={150} width={300}/>
    }

return (
        <CardMedia
            style={{maxWidth: 300}}
            component="img"
            height="140"
            image={picture}
            onError={handleImageError}
            alt="green iguana"
        />
    );
}

const mapDispatchToProps= {
    dispatchGetImage:getImage,

}

export default connect(null,mapDispatchToProps)(CardMediaCustom);
