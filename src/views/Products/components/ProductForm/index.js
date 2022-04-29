import React from 'react';
import { Link } from'react-router-dom';

import { makeStyles } from '@mui/styles';
import {
    Card,
    CardMedia,
    CardActions,
    CardContent,
    Button,
    Typography,
} from '@mui/material'
import CardMediaCustom from "../../../../components/CardMediaCustom";


const useStyles = makeStyles({
    mediaCard: {
        margin: 5,
        width: '100vw',
        display: 'flex',
    },
    linkTitle: {
        fontSize: '3vw',
        color: '#000',
    }
})

export default function ProductForm(props) {


    const classes = useStyles();
    const { product } = props;
    const { name, id, quantity , price } = product;
    return (
        <Card className={classes.mediaCard} style={{background: 'rgb(242, 244, 245)'}}>
            <Link to={`/products/${id}`}>
               <CardMediaCustom id={id}/>
            </Link>
            <CardContent>
                <div>
                    <Link to={`/products/${id}`} className={classes.linkTitle}>
                        {name}
                    </Link>
                    <Typography variant="body2" color="text.secondary" marginTop={'10px'}>
                        <div> {quantity} bucati</div>
                    </Typography>
                    <Typography gutterBottom variant="body1" component="div" marginTop={'10px'}>
                        <div>{price} lei</div>
                    </Typography>
                    <button className='btn1'>
                        Inchiriaza
                    </button>
                </div>
            </CardContent>
        </Card>
    );
}
