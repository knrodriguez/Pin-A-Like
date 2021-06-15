import React, { useState, useEffect, useCallback } from 'react';
import * as data from '../../nyc_ttp_pins.json';
import Pin from '../models/pin'
import { AllPins } from '../components'
const MAX_PINS = 35;

export default (props) => {
    const [pins, setPins] = useState([]);

    useEffect(() => {
        loadPins();
        
        return () => setPins([]);
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
        <div class='all-pins-view'>
            { 
                pins.length && 
                <AllPins 
                    pins={pins} 
                    loadPins={loadPins} 
                /> 
            }
        </div>
    )
}