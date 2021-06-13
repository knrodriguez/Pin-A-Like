import React, { useState, useEffect } from 'react';
import * as data from '../../nyc_ttp_pins.json';
import Pin from '../models/pin'
import { AllPins } from '../components'
const MAX_PINS = 20;

export default (props) => {
    const [pins, setPins] = useState([]);
    const [newPins, setNewPins] = useState([]);

    useEffect(() => {
        loadPins();
    }, [])

    function loadPins(){
        const morePins = getPins();
        setPins([...pins, ...morePins]);
        setNewPins(morePins)
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
                pins.length && <AllPins pins={pins} loadPins={loadPins} newPins={newPins}/> 
            }
        </div>
    )
}