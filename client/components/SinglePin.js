import React from 'react';
const PIN_WIDTH = 236;

export default ({pin}) => {
    return(
        <div>
            <img src={pin.images[`${PIN_WIDTH}x`].url} />
            <h5>{pin.title}</h5>
        </div>
    )
}