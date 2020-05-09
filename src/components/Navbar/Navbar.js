import React from 'react';
import './Navbar.scss';
import gmailLogo from '../../assets/logo-gmail.png';

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='nav--body'>
                <div className='nav--logo'>
                    <img src={gmailLogo} alt='the gmail logo' />
                    <p>Gmail</p>
                </div>
                <div class='nav--create'>
                   <p>For Work</p> 
                   <p>Sign in</p>
                   <h5>Create an account</h5>
                </div>
                

            </div>
        </nav>
    )
}

export default Navbar
