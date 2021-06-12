import React from 'react';
import { Link } from 'react-router-dom'
// import pinterestLogo from './../../public/images/pinterest_logo.png';

export default (props) => {
    return(
        <div class='navbar' style={{display: 'flex', alignItems: 'center', justifyContent:'space-between'}}>
            <Link to='/' style={{display:'flex', alignItems: 'center'}}>
                <img src='/assets/images/pinterest_logo.png' alt='pinterest-logo' style={{textDecoration:'none', width:'30px', height:'auto'}}/>
                Pinterest
            </Link>
            <Link to='/'> Show me cats!</Link>
            <div>
                {/* search bar */}
            </div>
            <Link to='/404'>Login</Link>
            <Link to='/404'>Sign Up</Link>
        </div>

    )
}