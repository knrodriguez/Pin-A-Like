import React, {useState, useEffect} from 'react';

export default () => {
    const [catUrl, setCatUrl] = useState('');

    useEffect(() => {
        getCatImg();
    }, [])

    function getCatImg(){
        fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => res.json())
        .then(json => setCatUrl(json[0].url))
    }

    return(
        <div> 
            <h1>We're Sorry!</h1>
            <p>We are quickly building this page, but until then, here is a cat.</p>
            <img src={catUrl} />
        </div>
    )
}