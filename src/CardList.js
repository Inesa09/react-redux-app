import React from 'react';
import Card from './Card';

const CardList = ({burgers}) => {
    return (
        <div> {
            burgers.map(burger => {
                return <Card key={burger.id} id={burger.id} username={burger.username} name={burger.name} email={burger.email} />
            })
        } </div>
    )
}

export default CardList;