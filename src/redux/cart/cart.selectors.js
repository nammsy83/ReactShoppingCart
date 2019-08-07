import { createSelector } from 'reselect';



export const selectCart = (state) => state.cart; // input selector

export const selectCartItems = createSelector(
    [selectCart], // first argument is an array of input selectors
    (cart) => cart.cartItems // second arg is a function that will return the value you want out of the selector
)


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQnty, cartItem) =>
        accumulatedQnty + cartItem.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQnty, cartItem) =>
        accumulatedQnty + cartItem.quantity * cartItem.price

        , 0)
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)