import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { removeItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, removeItemFromCart, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />

            </div>
            <div className="name">{name}</div>
            <div className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>

            </div>
            <div className="price">{price}</div>
            <div className="remove-button" onClick={() => removeItemFromCart(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => (
    {
        removeItemFromCart: item => dispatch(removeItemFromCart(item)),
        addItem: item => dispatch(addItem(item)),
        removeItem: item => dispatch(removeItem(item))

    }
)
export default connect(null, mapDispatchToProps)(CheckoutItem);