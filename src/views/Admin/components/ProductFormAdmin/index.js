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



const useStyles = makeStyles({
    mediaCard: {
        maxWidth: 250,
        minWidth: 250,
        margin: 10,
    }
})

export default function MediaCardAdmin(props) {

    const classes = useStyles();
    const { post , onDelete } = props;
    const { name, id, quantity , price } = post;
    const handleOnDelete=()=>{
        onDelete(id);
    }
    return (
        <Card className={classes.mediaCard} >
            <Link to={`/products/${id}`}>
                <CardMedia
                    component="img"
                    image={post.url}
                    alt={post.model}
                />
            </Link>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" marginTop={'2px'}>
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary" marginTop={'10px'}>
                    {quantity}
                </Typography>
                <Typography gutterBottom variant="body1" component="div" marginTop={'10px'}>
                    {price}
                </Typography>
            </CardContent>

            <CardActions>
                <Button
                    display='flex'
                    to={`/products/${id}`}
                    component={Link}
                    variant="outlined"
                    color="primary"
                >Learn More</Button>
                <Button
                    onClick={handleOnDelete}
                    display='flex'
                    variant="outlined"
                    color="primary"
                >Delete</Button>
            </CardActions>
        </Card>
    );
}