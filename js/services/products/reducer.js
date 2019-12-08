import {
    CHANGE_CURRENCY,
    RECEIVE_PRODUCTS
}
from "./actionTypes";

const initialState = {
    products: [],
    symbol: '$',
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return { ...state,
                products: action.products
            };
        case CHANGE_CURRENCY:
            return { ...state,
                symbol: action.symbol
            };
        default:
            return state;
    }
};
export default productReducer;