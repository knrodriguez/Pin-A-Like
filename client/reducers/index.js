import * as data from '../../pins.json';
import Pin from '../models/pin'

export const MAX_PINS = 80;
export const MAX_PIN_WIDTH = 236;
export const MIN_PIN_WIDTH = 136;
export const sizes = {
    200:1, 500:2, 750:3, 1000:4, 1250:5, 1500:6, 1750:7, 2000:8
}

export function getPins(){
    const pinsToLoad = [];

    for(let i = 0; i < MAX_PINS; i++){
        let randNum = Math.floor(Math.random() * data.length);
        let pin = new Pin(data[randNum]);
        pinsToLoad.push(pin);
    }

    return pinsToLoad;
}

export function isPageEnd(pinGridRef){
    const {
        scrollTop, 
        clientHeight, 
        scrollHeight
    } = pinGridRef.current;

    return scrollTop + clientHeight >= scrollHeight;
}

export function calculateColumns(pinGridRef){
    if(!pinGridRef) return;

    const {offsetWidth} = pinGridRef.current;
    let numColumns = 1;

    for(const windowSize in sizes){
        if(offsetWidth > windowSize) {
            numColumns = sizes[windowSize];
        } else return numColumns;
    }

    return numColumns;
}

