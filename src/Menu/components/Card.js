import React from 'react';
import './Card.css';

const Card = ({id, name, ingredients}) => {
    return(
        <div className="tc  br3  dib  pa3  ma3  bw2  shadow-5  card"> 
            <img alt="burgers" src={require(`../images/${id}.jpg`)} className="img"/>
            <div> 
                <h3>{name}</h3>
                <p>{ingredients}</p>
            </div>
        </div>
    );
}

export default Card;