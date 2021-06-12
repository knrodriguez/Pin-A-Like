import React, { useState, useEffect } from 'react';
import * as data from '../../nyc_ttp_pins.json';
import Pin from '../models/pin'
import { AllPins } from '../components'
const MAX_PINS = 20;

export default (props) => {
    const [pins, setPins] = useState([]);
    
    useEffect(() => {
        loadPins();
    }, [])

    function loadPins(){
        setPins([...pins, ...getPins()]);
    }

    function getPins(){
        const pinsToLoad = [];

        for(let i = 0; i < MAX_PINS; i++){
            let randNum = Math.floor(Math.random() * data.length);
            let pin = new Pin(data[randNum]);
            pinsToLoad.push(pin);
        }

        return pinsToLoad;
    }

    return(
        <div 
            style={{
                display:'flex', 
                flexDirection: 'row', 
                overflow:'hidden'
            }}>
            { 
                pins.length && <AllPins pins={pins} loadPins={loadPins}/> 
            }
        </div>
    )
}