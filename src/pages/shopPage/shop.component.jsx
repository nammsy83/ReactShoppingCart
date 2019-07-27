import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collectionPreview/collectionPreview.component';

class ShopPage extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }


    render() {
        return (
            <div>
                {this.state.collections.map(({ id, ...otherCollections }) =>
                    <CollectionPreview key={id} {...otherCollections} />
                )}

            </div>
        )
    }
}

export default ShopPage;