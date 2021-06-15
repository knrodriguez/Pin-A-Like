import React from 'react';
import { Link } from 'react-router-dom'

export default (props) => {
    return(
        <div class='navbar'>
            <div class='flex-container'>
                <div class='flex-row flex-align-center justify-start'>
                    <Link to='/'>
                        <img id='pinterest-logo' src='/assets/images/pinterest_logo.png' alt='pinterest-logo'/>
                    </Link>
                    <span class='padding-horizontal pinterest-text-decoration'>Pin-A-Like</span>
                </div>
            </div>
            <div class='flex-container padding-left fill-space'>
                <div id='search-bar' class='flex-container padding-left fill-space flex-align-center space-between'>
                    <svg class='icon' width="24" height="24" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d=" M 601 199C 601 199 601 199 601 199C 491 199 401 289 401 399C 401 452 422 503 460 540C 497 578 548 599 601 599C 711 599 801 509 801 399C 801 289 711 199 601 199M 601 99C 601 99 601 99 601 99C 767 99 901 233 901 399C 901 479 869 555 813 611C 757 667 681 699 601 699C 534 699 468 676 416 634C 416 634 211 839 211 839C 201 849 176 850 166 840C 166 840 136 809 136 809C 126 799 126 774 136 764C 136 764 345 555 345 555C 316 508 301 454 301 399C 301 319 333 243 389 187C 445 131 521 99 601 99" transform="translate(1000,0) scale(-1,1)"/></svg> 
                    <input
                        class='fill-space' 
                        placeholder='Search for easy dinners, fashion, cats, etc. (really, all you need is cats)'
                    />
                </div>
            </div>
            <div class='navbar navbar-group'>
                <Link to='/'> Show me cats!</Link>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign Up</Link>
            </div>
        </div>

    )
}