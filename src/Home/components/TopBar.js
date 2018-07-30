import React from 'react';
import ItemList from './ItemList';
import './TopBar.css';

const TopBar = () => {
    const items = ['Home', 'About', 'Menu', 'Contact'];

    return (
        <div className="top_bar"> 
            <ItemList items = {items} />
        </div>
    )
}

export default TopBar;