import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {
    Container,
    Box,
    Typography,
     Button
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useParams,useNavigate, Link} from 'react-router-dom';
import { UserContext } from '../../components/context/UserContext';
import CardMediaCustom from "../../components/CardMediaCustom";
import {fetchProductId} from "../../services/firebaseServices";
import {getProduct} from "./actions";
import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesPacking, faCar, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles({
    backButton: {
        '& svg': {
            marginRight: 4,
        }
    }
});


function Product(props) {
    const {posts, product}=props;
    const params = useParams()
    const { id ,name } = params;
    const navigate = useNavigate();
    const classes = useStyles();
    const [products, setProducts] = useState([])

    useEffect(() => {
        if(id) {
            props.dispatchGetProduct(id)
        }
    }, [id])

    return (
        <>
            <Link to='/products'>
                <Button
                    to={`/products`}
                    className={classes.backButton}
                    variant="outlined"
                ><ArrowBackIcon fontSize="small" />Products</Button>
            </Link>
            <Box className='container' 
                mt={4}>
                <center>
                <div style={{float: "left"}}>
               <CardMediaCustom id={id} />
                </div>
                <div className='container2'>
                <Typography component="div"  gutterBottom className='let'>
                    <Typography variant="caption" component="span"></Typography>
                        <h1>Name: {product?.name} </h1>
                </Typography>

                <br />
                <Typography component="div" gutterBottom className='let'>
                    <Typography variant="caption" component="span"></Typography>
                        <h4>Quantity: {product?.quantity}</h4> 
                </Typography>

                <br />
                <Typography component="div" variant='h5' gutterBottom className='let'>
                    <Typography variant="caption" component="span"></Typography>
                        <h3>Price:{product?.price}</h3>
                </Typography>
                </div> </center>

                <div className='container1' style={{float: "left"}}>
                    <h1 className='del' style={{float: "left"}}>Delivery: Free </h1> 
                        <FontAwesomeIcon icon={faCar} className='icon1'/> 
                    <h1 className='del' style={{float: "left"}}>Return: Free</h1>
                        <FontAwesomeIcon icon={faBoxesPacking} className='icon2'/> 
                </div>

                <div>
                    <button className='btn' style={{backgroundColor : 'green' }}>
                        Adauga in cos
                    </button>
                </div>

                <UserContext.Consumer>
                    {user => {
                        return <div>
                            {user?.email}
                        </div>
                    }}
                </UserContext.Consumer>
            </Box>
            {products.map(product => (
                    <div key={product.quantity}>
                        {product.name}
                    </div>
                )
            )}
        </>
    )
}

const mapStateToProps = state => {
    return {
        ...state.product,
    };
}

const mapDispatchToProps= {
    dispatchGetProduct: getProduct,
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
