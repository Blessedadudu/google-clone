import React from 'react';
import './Navbar.scss';
import gmailLogo from '../../assets/logo-gmail.png';

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='nav--body'>
                <div>
                    <p>Gmail</p>
                </div>
                <img src={gmailLogo} alt='the gmail logo' />
                <h1>Navbar Component</h1>
            </div>
        </nav>
    )
}

export default Navbar
