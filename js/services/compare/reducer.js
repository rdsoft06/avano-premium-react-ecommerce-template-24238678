import {
    ADD_TO_COMPARE,
    REMOVE_FROM_COMPARE
} from "./actionTypes";

export default function compareReducer(state = {
    items: []
}, action) {
    switch (action.type) {
        case ADD_TO_COMPARE:
            if (state.items.findIndex(product => product.id === action.product.id) !== -1) {
                return { ...state
                }
            }

            return { ...state,
                items: [...state.items, action.product]
            }

        case REMOVE_FROM_COMPARE:
            return {
                items: state.items.filter(product => product.id !== action.product.id)
            }

        default:
    }
    return state;
}