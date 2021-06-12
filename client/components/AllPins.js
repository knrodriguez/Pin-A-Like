import React from 'react';

export default ({pins}) => {
    return (
        <div>
            { pins.length && pins.maps(pin => <SinglePin pin={pin} />) }
        </div>
    )
}