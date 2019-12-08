import {
    CHANGE_QUICKVIEW
}
from "./actionTypes";

const initialState = {
    id: 0,
};

const quickviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_QUICKVIEW:
            return { ...state,
                id: action.id
            };
        default:
            return state;
    }
};
export default quickviewReducer;