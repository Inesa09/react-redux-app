import React from 'react';
// import './SearchBox.css';

const SearchBox = ({searchChange}) => {
    return(
        <div className="pa2"> 
            <input 
                className="pa3 ma4 ba b--navy bg-washed-blue" 
                type='search' 
                placeholder='Search for burger'
                onChange = {searchChange}
            />      
        </div>
    )
}

export default SearchBox;