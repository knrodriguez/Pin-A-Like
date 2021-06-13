import React from 'react';
import { Link } from 'react-router-dom'
// import pinterestLogo from './../../public/images/pinterest_logo.png';

export default (props) => {
    return(
        <div class='navbar'>
            <div class='navbar'>
                <div class='flex-row flex-align-center justify-start'>
                    <Link to='/'>
                        <img id='pinterest-logo' src='/assets/images/pinterest_logo.png' alt='pinterest-logo'/>
                    </Link>
                    <span class='padding-horizontal pinterest-text-decoration'>Pin-A-Like</span>
                </div>
            </div>
            <div>
                {/* search bar */}
            </div>
            <div class='navbar navbar-group'>
                <Link to='/'> Show me cats!</Link>
                <Link to='/404'>Login</Link>
                <Link to='/404'>Sign Up</Link>
            </div>
        </div>

    )
}