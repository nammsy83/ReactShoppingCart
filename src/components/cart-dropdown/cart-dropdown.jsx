import React from 'react';
import CustomButton from '../../components/custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import CartItem from '../cartItems/cart-items.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                    (cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    )))
                    :
                    (<div className="empty-message">Your cart is empty</div>)
            }
        </div>
        <CustomButton
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
    </div >
);

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),

});

export default withRouter(connect(mapStateToProps)(CartDropdown));  