import React, {useState} from 'react';
const PIN_WIDTH = 236;

export default ({pin}) => {
    const [overlay, setOverlay] = useState(false);

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
                <img src={pin.images[`${PIN_WIDTH}x`].url} />
            </div>
            <h3 class='pin-title'>{pin.title}</h3>
        </div>
    )
}