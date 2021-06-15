import React, { useState, useEffect, useRef } from 'react';
import Masonry from 'react-responsive-masonry';
import { SinglePin } from '../components';

const MAX_PIN_WIDTH = 236;
const MIN_PIN_WIDTH = 136;

const sizes = {
    200:1, 500:2, 750:3, 1000:4, 1250:5, 1500:6, 1750:7, 2000:8
}

export default ({pins, loadPins}) => {
    const pinGridRef = useRef();
    const [columns, setColumns] = useState(1);

    useEffect(() => {
        resizeAllPins();
        window.addEventListener('resize', resizeAllPins)

        return () => {
            window.removeEventListener('resize', resizeAllPins)
        }
    },[])

    function resizeAllPins (){
        setColumns(calculateColumns());
    }

    function isPageEnd(e){
        const {
            scrollTop, 
            clientHeight, 
            scrollHeight
        } = pinGridRef.current;

        if(scrollTop + clientHeight >= scrollHeight - 1){
            loadPins();
        } 
    }

    function calculateColumns(){
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
    
    return (
        <div class='pin-grid' 
            ref={pinGridRef}
            onScroll={isPageEnd}>
                <Masonry columnsCount={columns} gutter='10px'>
                    { 
                        pins.length && 
                        pins.map(pin => 
                            <SinglePin 
                                key={pin.id} 
                                pin={pin} 
                                pinWidth={columns > 1 ? MAX_PIN_WIDTH : MIN_PIN_WIDTH}
                                MIN_PIN_WIDTH={MIN_PIN_WIDTH}
                            />
                        ) 
                    }
                </Masonry>
        </div>
    )
}