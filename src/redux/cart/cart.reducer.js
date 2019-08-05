import CartActionTypes from './cart.types';
import { addItemToCart } from '../../redux/cart/cart.utils';
const initialState = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_DROPDOWN:
            return {
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_CART_ITEMS:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        default:
            return state;
    }
}

export default cartReducer;