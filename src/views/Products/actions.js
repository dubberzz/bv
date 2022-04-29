import {SET_PRODUCTS} from "./constants"
import {fetchProductService} from "../../services/firebaseServices";
import {IS_LOADING} from "./constants";

export const getProducts = () => {

    return async (dispatch) => {
        dispatch(isLoading(true))
        try {
            const products = await fetchProductService();
            dispatch({
                type: SET_PRODUCTS,
                products: products
            })
        } catch (errors) {
            console.log(errors)
        }
        dispatch(isLoading(false))
    }
}
export const isLoading = (loading) => {
    return {
        type: IS_LOADING,
        loading:loading
    }
}
