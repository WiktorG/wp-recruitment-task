import { INCREASE_CART_ITEM_COUNT } from '~/redux/actions/cartActions';

const initialState = {
    itemCount: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
    case INCREASE_CART_ITEM_COUNT:
        return {
            ...state,
            itemCount: state.itemCount + action.amountToIncrease,
        };
    default:
        return state;
    }
};

export default cartReducer;
