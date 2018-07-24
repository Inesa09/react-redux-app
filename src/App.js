import React from 'react';
import CardList from './CardList'
import {burgers} from './burgers'

const App = () => {
    return (
        <div className="bg-washed-yellow"> 
            <h1> My BurgerFriends </h1>
            <CardList burgers = {burgers}/> 
        </div>
    )
}

export default App;