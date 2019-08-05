import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import './collectionItem.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="collection-footer">
                <div className="name">{name}</div>
                <div className="price">{price}</div>
            </div>
            <CustomButton onClick={() => addItem(item)} isInverted>Add to Cart</CustomButton>
        </div>
    )
}

const mapsDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapsDispatchToProps)(CollectionItem);