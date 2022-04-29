import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {
    Container,
    Box, Typography, Button, Divider,
} from '@mui/material';
import ProductForm from '../Products/components/ProductForm';
import {getProducts} from "./actions";
import Loading from '../../components/Loading';

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import {Link} from 'react-router-dom';
import SearchTextfield from "../../components/SearchTextfield";
import CustomDialog from '../../components/Dialog';
import Product from "../Product";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

function Products(props) {
    const  [searchValue,setSearchValue] = useState("");
    const {dispatchGetProducts , products, loading }=props;

    useEffect( () => {
        dispatchGetProducts();
    },[])

    //filtrarea se face pe server nu local,firebase
    //editarea produselor in modal
    const filteredProducts = products.filter(item=>item.name.includes(searchValue))
    if(loading) {
        return(
            <Container component="main" maxWidth="xs">
                <Loading/>
            </Container>

        )
    }
    const handleOnChange = (event) => {
         setSearchValue(event.target.value);
        // dispatchGetProducts(event.target.value);
    }

    return (
        <Container component="main" maxWidth="lg" className='container'>
            <Link to='/'>
            <Button
                to={`/`}
                variant="outlined"
            ><ArrowBackIcon fontSize="small" />Back</Button>
            </Link>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 'auto',
                }}>
                <Typography component="h1" variant='h6' gutterBottom>Inchirieri</Typography>
                <SearchTextfield onSearchChange={handleOnChange}/>
                <Box
                    sx={{
                        marginTop: 7,
                        display: 'flex',
                        flexWrap: 'wrap',
                    }}>
                    
                    {filteredProducts.map(product => {
                        return <ProductForm
                            key={product.id}
                            product={product}
                        />
                    })}
                </Box>
            </Box>
            <Divider/>
            <CustomDialog label="bla" title={<Product />}/>
        </Container>
    )
}
const mapStateToProps = state => {
    return {
        ...state.products,
    };
}

const mapDispatchToProps= {
    dispatchGetProducts: getProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)