import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux'; // connect is a high order component and high order components take components as arguments and return a new component
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectUser } from '../../redux/user/user.selectors';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>

            {
                currentUser ?
                    <div
                        className="option"
                        onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div> :
                    <Link
                        className="option"
                        to="/SignInAndSignUp">
                        SIGN IN
                    </Link>
            }
            <CartIcon />

        </div>
        {
            hidden ? null : <CartDropdown />
        }

    </div>
);

const mapStateToProps = (state) =>
    ({ // we get state object in this function. The state arg is the root reducer (top level root reducer)
        currentUser: selectUser(state),
        hidden: selectCartHidden(state)

    })

export default connect(mapStateToProps)(Header); // first argument is going to be a function that allows us to access the state, the state being our root reducer.