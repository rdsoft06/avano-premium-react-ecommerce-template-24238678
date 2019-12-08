import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_QUANTITY
} from "./actionTypes";

export default function cartReducer(state = {
    cart: []
}, action) {
    switch (action.type) {
        case ADD_TO_CART:
            if (state.cart.findIndex(product => product.id === action.product.id) !== -1) {
                let cart = [];

                state.cart.map((product) => {
                    if (product.id === action.product.id) {
                        cart.push({ ...product,
                            qty: parseInt(product.qty) + parseInt(action.qty)
                        });
                    } else {
                        cart.push(product);
                    }
                    return false;
                })

                return { ...state,
                    cart: cart
                };
            }

            return { ...state,
                cart: [...state.cart, { ...action.product,
                    qty: parseInt(action.qty)
                }]
            }

        case REMOVE_FROM_CART:
            return {
                cart: state.cart.filter(product => product.id !== action.product.id)
            }

        case UPDATE_QUANTITY:
            if (state.cart.findIndex(product => product.id === action.product.id) !== -1) {
                let cart = [];
                if (action.quantity === '') {
                    action.quantity = 1;
                }

                state.cart.map((product) => {
                    if (product.id === action.product.id) {
                        cart.push({ ...product,
                            qty: isNaN(parseInt(action.quantity)) || parseInt(action.quantity) < 1 ? 1 : parseInt(action.quantity)
                        });
                    } else {
                        cart.push(product);
                    }
                    return false;
                })

                return { ...state,
                    cart: cart
                };
            }

            return {
                cart: state.cart
            }

        default:
    }
    return state;
}