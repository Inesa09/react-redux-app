import React from 'react';

import './Item.css'

const Item = ({ name }) => {
    return (
        <div className="item">
            <a className="item_name" href = {`#${name}`}> {name} </a>
            <div className="line"> </div>
        </div>
    )
}

export default Item;