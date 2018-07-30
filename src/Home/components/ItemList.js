import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '500px' }}> {
            items.map(item => <Item name={item} />)
        } </div>
    )
}

export default ItemList;