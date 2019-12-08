import {
    SHOW,
    SORT_BY,
    PAGE,
    CATEGORY,
    ADD_BRAND,
    REMOVE_BRAND,
    ADD_COLOR,
    REMOVE_COLOR,
} from "./actionTypes";

export const showProducts = (value) => ({
    type: SHOW,
    value
});

export const sortBy = (value) => ({
    type: SORT_BY,
    value
});

export const changePage = (value) => ({
    type: PAGE,
    value
});

export const changeCategory = (value) => ({
    type: CATEGORY,
    value
});

export const addBrand = (value) => ({
    type: ADD_BRAND,
    value
});

export const removeBrand = (value) => ({
    type: REMOVE_BRAND,
    value
});

export const addColor = (value) => ({
    type: ADD_COLOR,
    value
});

export const removeColor = (value) => ({
    type: REMOVE_COLOR,
    value
});