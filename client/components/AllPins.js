import React from 'react';
import { SinglePin } from '../components'

export default ({pins}) => {
    console.log(pins)
    return (
        <div>
            { pins.length && pins.map(pin => <SinglePin pin={pin} />) }
        </div>
    )
}