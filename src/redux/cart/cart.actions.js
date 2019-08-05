import CartActionTypes from './cart.types';

const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_DROPDOWN
})

export const addItem = item => ({
    type: CartActionTypes.ADD_CART_ITEMS,
    payload: item
})

export default toggleCartHidden;