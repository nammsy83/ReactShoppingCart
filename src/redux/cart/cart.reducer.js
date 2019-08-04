import CartActionTypes from './cart.types';

const initialState = {
    hidden: true
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_DROPDOWN:
            return {
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default cartReducer;