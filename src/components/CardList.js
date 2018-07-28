import React from 'react';
import Card from './Card';

const CardList = ({ burgers }) => {
    return (
        <div style={{ paddingTop: '280px' }}> {
            burgers.map(burger => {
                return <Card key={burger.id} id={burger.id} name={burger.name} email={burger.email} />
            })
        } </div>
    )
}

export default CardList;