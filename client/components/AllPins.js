import React, { useState, useEffect, useRef } from 'react';
import { SinglePin } from '../components';

export default ({pins, loadPins}) => {
    const pinGridRef = useRef();
    const [pinGridHeight, setPinGridHeight] = useState(0);

    useEffect(() => {
        const {offsetTop} = pinGridRef.current;
        setPinGridHeight(window.innerHeight-offsetTop);
    },[])

    function isPageEnd(e){
        const {scrollTop, clientHeight, scrollHeight} = pinGridRef.current;
        if(scrollTop + clientHeight >= scrollHeight){
            loadPins();
        } 
    }

    return (
        <div class='pin-grid' 
            style={{
                overflow: 'scroll', 
                overflowY: 'auto', 
                height:`${pinGridHeight}px`
            }} 
            ref={pinGridRef}
            onScroll={isPageEnd}>
            { 
                pins.length && pins.map(pin => <SinglePin pin={pin} />) 
            }
        </div>
    )
}