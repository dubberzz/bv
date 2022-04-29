import React, {useState , useEffect} from "react"
import {connect} from "react-redux";
import { createProduct, deleteProduct, getProduct } from "./actions";
import {
    Avatar,
    Box,
    Button,
    Container,
    Divider,
    TextField,
    Typography
} from "@mui/material";

import AddIcon from '@mui/icons-material/Add';
import ProductFormAdmin from './components/ProductFormAdmin'

import Loading from "../../components/Loading";
import {uploadImagesFirebase} from "../../services/firebaseServices";


function Admin(props) {
    const {loading, products ,dispatchCreateProduct,dispatchDeleteProduct} =props
    const [newProduct ,setNewProduct] = useState({})
    const [image , setImage ] = useState(null);

    const handleChangeImage = e =>{
        if(e.target.files[0]){
            setImage(e.target.files[0]);
            console.log(e.target.files)
        }
    }
    const handleUpload= () => {
       const dataUpload = uploadImagesFirebase(image);
       console.log(dataUpload);
    }

    const handleCreateProduct = () => {
        dispatchCreateProduct({...newProduct, image: image});
    }

    const handleChangeProduct= (type) => (event) =>{

        const data = {
            ...newProduct,
            [type] : event.target.value
        }
        setNewProduct(data);
    }
    useEffect(() => {
        props.dispatchGetProducts();
    },[] );

    if(loading) {
        return(
            <Container component="main" maxWidth="lg">
                <Loading/>
            </Container>

        )
    }
    console.log(products);
    return (
        <Container component="main" maxWidth="lg">
            <Box
                sx={{
                    flex: 'auto',
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Avatar sx={{ m: 1, bgcolor: '#008CBA' }}>
                    <AddIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Add elements to the database
                </Typography>
                <Box noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="text"
                        label="Name"
                        type = "text"
                        name="text"
                        autoFocus
                        onChange={handleChangeProduct('name')}

                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        type="number"
                        id="price"
                        label="Price"
                        name="price"
                        autoFocus
                        onChange={handleChangeProduct('price')}

                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        type="number"
                        id="quantity"
                        label="Quantity"
                        name="quantity"
                        autoFocus
                        onChange={handleChangeProduct('quantity')}

                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        type="text"
                        id="url"
                        label="URL"
                        name="url"
                        autoFocus
                        onChange={handleChangeProduct('url')}

                    />

                    <TextField
                        margin="normal"
                        fullWidth
                        type="file"
                        id="file"
                        label="file"
                        name="file"
                        autoFocus
                        onChange={handleChangeImage}
                    />
                    <Button
                        onClick={handleUpload}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}>
                        Upload
                    </Button>

                    <Button
                        onClick={handleCreateProduct}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}>
                        Add element
                    </Button>


                    <Divider/>
                </Box>
                <Box>
                    {(products || []).map(product => {
                        return <ProductFormAdmin
                            key={product.id}
                            post={product}
                            onDelete={dispatchDeleteProduct}
                        />
                    })}

                </Box>
            </Box>
        </Container>

    )
}

const mapStateToProps = state => {
    return {
        ...state.admin,
    };
}

const mapDispatchToProps= {
    dispatchGetProducts:getProduct,
    dispatchCreateProduct:createProduct,
    dispatchDeleteProduct : deleteProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
