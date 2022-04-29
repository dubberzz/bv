import {SET_PRODUCT} from "./constants"
import {fetchProductId} from "../../services/firebaseServices";
import {IS_LOADING} from "./constants";

export const getProduct = (id) => {

    return async (dispatch) => {
        dispatch(isLoading(true))
        try {
            const product = await fetchProductId(id);
            dispatch({
                type: SET_PRODUCT,
                product: product
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
