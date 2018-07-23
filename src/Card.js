import React from 'react';
import './Card.css';

const Card = ({username, name, email}) => {
    return(
        <div className="tc bg-washed-red  br3  dib  pa3  ma2  bw2  shadow-5  card"> 
            <img alt="robots" src={`https://robohash.org/${username}?set=set4`}/>
            <div> 
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;