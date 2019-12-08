import {
    toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    ADD_TO_COMPARE,
    REMOVE_FROM_COMPARE
} from "./actionTypes";

export const addToCompare = (product, translate) => (dispatch) => {
    toast.success(translate('added_to_compare'));
    dispatch(addToCompareUnsafe(product))
}

export const addToCompareUnsafe = (product) => ({
    type: ADD_TO_COMPARE,
    product
});

export const removeFromCompare = product => ({
    type: REMOVE_FROM_COMPARE,
    product
});