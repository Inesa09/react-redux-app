import React from 'react'

const Scroll = (props) => {
    return (
        <div style={{position: 'fixed', top: '0', borderBottom: '1px solid black', height: 'fitcontent', 
                    width: '100%', background: 'linear-gradient(to right, lightcyan, darkgray)'}}> 
            {props.children}
        </div>
    )
}

export default Scroll;