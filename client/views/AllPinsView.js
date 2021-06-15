import React, { useState, useEffect, useCallback } from 'react';
import * as data from '../../nyc_ttp_pins.json';
import Pin from '../models/pin'
import { AllPins } from '../components'
const MAX_PINS = 35;

export default (props) => {
    const [pins, setPins] = useState([]);
    const [pinsViewWidth, setPinsViewWidth] = useState(0)

    const pinsViewRef = useCallback( node => {
        if(node){
            setPinsViewWidth(node.offsetWidth)
        }
    },[]);

    useEffect(() => {
        loadPins();
    }, [])

    function loadPins(){
        const morePins = getPins();
        setPins([...pins, ...morePins]);
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
        <div class='all-pins-view' ref={pinsViewRef} style={{display: 'flex'}}>
            <div style={{width: 200, height:500}}>FAKE BLOCK HERE</div>
            { 
                pins.length && 
                <AllPins 
                    pins={pins} 
                    loadPins={loadPins} 
                    pinsViewWidth={pinsViewWidth}/> 
            }
            <div style={{width: 800, height:500}}>FAKE BLOCK HERE</div>
        </div>
    )
}