import React from 'react';
import './Navbar.scss';
import gmailLogo from '../../assets/logo-gmail.png';

const Navbar = () => {
    return (
        <>
        <nav className='nav'>
            <div className='nav--body'>
                <div className='nav--logo'>
                    <img src={gmailLogo} alt='the gmail logo' />
                    <p>Gmail</p>
                </div>
                <div className='nav--create'>
                   <p>For Work</p> 
                   <p>Sign in</p>
                   <h5 className='createHide'>Create an account</h5>
                   <h5>Get Gmail</h5>

                </div>
                

            </div>
        </nav>
        <div className='nav--media'>
            <div>
              <p>For Work</p> 
              <p>Sign in</p>  
            </div>
            
        </div>
        </>
    )
}

export default Navbar
