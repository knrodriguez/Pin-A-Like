import React from 'react';
import { SinglePin } from '../components'

export default ({pins}) => {
    return (
        <div class='pin-grid'>
            { pins.length && pins.map(pin => <SinglePin pin={pin} />) }
        </div>
    )
}