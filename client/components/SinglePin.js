import React, {useState} from 'react';

export default ({pin, pinWidth, MIN_PIN_WIDTH}) => {
    const [overlay, setOverlay] = useState(false);
    const imageWidth = `${pinWidth}x${pinWidth === MIN_PIN_WIDTH ? '136' : ''}`;
    
    return(
        <div class='pin'>
            <div 
                class='pin-image' 
                onMouseOver={() => setOverlay(true)} 
                onMouseLeave={() => setOverlay(false)} 
            >
                {
                    overlay && 
                    <>
                        <div class='overlay'></div>
                        <span>OPEN</span>
                    </>
                }
                <img 
                    src={pin.images[imageWidth].url} 
                />
            </div>
            <h3 class='pin-title'>{pin.title}</h3>
        </div>
    )
}