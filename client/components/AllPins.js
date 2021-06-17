import React, { useState, useEffect, useRef } from 'react';
import Masonry from 'react-responsive-masonry';
import { SinglePin } from '../components';
import { 
    getPins, 
    isPageEnd, 
    calculateColumns,
    MAX_PIN_WIDTH,
    MIN_PIN_WIDTH
} from '../reducers'

export default (props) => {
    const pinGridRef = useRef();
    const [columns, setColumns] = useState(1);
    const [pins, setPins] = useState([]);

    useEffect(() => {
        loadPins();
        resizeAllPins();
        window.addEventListener('resize', resizeAllPins)

        return () => {
            window.removeEventListener('resize', resizeAllPins)
            setPins([]);
        }
    }, [])

    function loadPins(){
        setPins([...pins, ...getPins()]);
    }

    function resizeAllPins (){
        setColumns(calculateColumns(pinGridRef));
    }

    function infiniteScroll(){
        isPageEnd(pinGridRef) && loadPins();
    }
    
    return (
        <div class='pin-grid' 
            ref={pinGridRef}
            onScroll={infiniteScroll}>
                <Masonry columnsCount={columns} gutter='10px'>
                    { 
                        pins.length && 
                        pins.map(pin => 
                            <SinglePin 
                                key={pin.id} 
                                pin={pin} 
                                pinWidth={
                                            columns > 1 ? 
                                            MAX_PIN_WIDTH : 
                                            MIN_PIN_WIDTH
                                        }
                                MIN_PIN_WIDTH={MIN_PIN_WIDTH}
                            />
                        ) 
                    }
                </Masonry>
        </div>
    )
}