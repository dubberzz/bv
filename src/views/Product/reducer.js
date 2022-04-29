import {SET_PRODUCT , IS_LOADING} from "./constants";


const initialState={
    product:{},
    loading:false,
};

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PRODUCT:
            return {
                ...state,
                product: action.product,
            }
        case IS_LOADING:
            return {
                ...state,
                loading: action.loading
            }

        default:
            return state
    }
}

export default productReducer
