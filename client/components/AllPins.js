import React, { useState, useEffect, useRef } from 'react';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import { SinglePin } from '../components';
const PIN_WIDTH = 236;

export default ({pins, loadPins, newPins}) => {
    const pinGridRef = useRef();
    const [pinGridHeight, setPinGridHeight] = useState(0);
    const msnry = useRef({});
    const sizes = [
        {columns: 1, gutter: 10},
        {mq: '472px', columns: 2, gutter: 20},
        {mq: '750px', columns: 3, gutter: 20},
        {mq: '1000px', columns: 4, gutter: 20},
        {mq: '1000px', columns: 4, gutter: 20},
        {mq: '1250px', columns: 5, gutter: 20},
        {mq: '1500px', columns: 6, gutter: 20},
        {mq: '1750px', columns: 7, gutter: 20},
        {mq: '2000px', columns: 8, gutter: 20},
    ]

    useEffect(() => {
        const {offsetTop} = pinGridRef.current;
        setPinGridHeight(window.innerHeight-offsetTop);
    },[])

    useEffect(() => {
    },[pins])

    function isPageEnd(e){
        const {scrollTop, clientHeight, scrollHeight} = pinGridRef.current;
        if(scrollTop + clientHeight >= scrollHeight){
            loadPins();
        } 
    }
    // height:`${pinGridHeight}px`,
    return (
        <div class='pin-grid' 
            style={{
                overflow: 'scroll', 
                overflowY: 'scroll', 
            }} 
            ref={pinGridRef}
            onScroll={isPageEnd}>
                <ResponsiveMasonry
                columnsCountBreakPoints={{200:1, 500:2, 750:3, 1000:4, 1250:5, 1500:6, 1750:7, 2000:8}}>
                    <Masonry>
                        { 
                            pins.length && 
                            pins.map(pin => <SinglePin key={pin.id} pin={pin} />) 
                        }
                    </Masonry>
                </ResponsiveMasonry>

        </div>
    )
}