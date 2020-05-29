import { combineReducers } from 'redux';

import cartReducer from '~/redux/reducers/cartReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
});

export default rootReducer;
