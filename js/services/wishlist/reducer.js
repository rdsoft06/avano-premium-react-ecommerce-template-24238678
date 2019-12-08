import {
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST
} from "./actionTypes";

export default function wishlistReducer(state = {
    items: []
}, action) {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            if (state.items.findIndex(product => product.id === action.product.id) !== -1) {
                return { ...state
                }
            }

            return { ...state,
                items: [...state.items, action.product]
            }

        case REMOVE_FROM_WISHLIST:
            return {
                items: state.items.filter(product => product.id !== action.product.id)
            }

        default:
    }
    return state;
}