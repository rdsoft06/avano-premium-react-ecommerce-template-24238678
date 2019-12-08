import {
    combineReducers
} from 'redux';
import {
    IntlReducer as Intl
} from 'react-redux-multilingual'

import productReducer from './products/reducer';
import compareReducer from './compare/reducer';
import cartReducer from './cart/reducer';
import filterReducer from './filter/reducer';
import wishlistReducer from './wishlist/reducer';
import quickviewReducer from './quickview/reducer';

const rootReducer = combineReducers({
    Intl,
    data: productReducer,
    compare: compareReducer,
    cartList: cartReducer,
    filter: filterReducer,
    wishlist: wishlistReducer,
    quickview: quickviewReducer
});

export default rootReducer;