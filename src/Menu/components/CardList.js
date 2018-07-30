import React from 'react';
import Card from './Card';

const CardList = ({ burgers }) => {
    return (
        <div> {
            burgers.map(burger => <Card key={burger.id} id={burger.id} name={burger.name} 
                                    ingredients={burger.ingredients} price={burger.price} />)
        } </div>
    )
}

export default CardList;