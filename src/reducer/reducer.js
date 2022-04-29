import { combineReducers } from 'redux';
import reduxReducer from "../views/Redux/reducer";
import reduxEmail from "../views/About/reducer";
import productsReducer from "../views/Products/reducer";
import snackbarReducer from "../components/SnackBar/reducer";
import adminReducer from "../views/Admin/reducer";
import productReducer from "../views/Product/reducer";

export default combineReducers({
    contact: reduxReducer,
    email: reduxEmail,
    products: productsReducer,
    snackbar: snackbarReducer,
    admin: adminReducer,
    product: productReducer
});
