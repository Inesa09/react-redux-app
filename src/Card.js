import React from 'react';
import './Card.css';

const Card = ({id, name, email}) => {
    return(
        <div className="tc  br3  dib  pa3  ma2  bw2  shadow-5  card"> 
            <img alt="burgers" src={require(`./images/${id}.jpg`)}/>
            <div> 
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;