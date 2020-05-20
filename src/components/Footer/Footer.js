import React, { Component } from 'react';
import './Footer.scss';
import circlehelp from '../../assets/SVG/help-with-circle.svg'

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                    <h1>Google</h1>
                    <div className='privacy'>
                        <p>Privacy </p>
                        <p> Terms</p>
                        <p>About Google</p>
                        <p> Google Products</p> 
                        <p> Our policy</p>
                    </div>
                    <div className='footFlex2'>
                        <a href="https://support.google.com/mail/?hl=en#topic=7065107" target="_blank" rel="noopener noreferrer" className='footLink'>
                            <img src={circlehelp} alt='svg' />
                            <p>Help</p>
                        </a>
                        <div className='footSelect'>
                        {/* <label for="cars">Choose a car:</label> */}
                            <select className="select-css">
                            <option value="/intl/az/gmail/about/" >Azərbaycan Dili</option>
                                <option value="/intl/ms/gmail/about/" >Bahasa Melayu</option>
                                <option value="/intl/ca/gmail/about/" >Català</option>
                                <option value="/intl/da/gmail/about/" >Dansk</option>
                                <option value="/intl/de/gmail/about/" >Deutsch</option>
                                <option value="/intl/et/gmail/about/" >Eesti</option>
                                <option value="/gmail/about/" selected>English</option>
                                <option value="/intl/en_in/gmail/about/" >English (India)</option>
                                <option value="/intl/en_uk/gmail/about/" >English (United Kingdom)</option>
                                <option value="/intl/es/gmail/about/" >Español</option>
                                <option value="/intl/es-419/gmail/about/" >Español (Latinoamérica)</option>
                                <option value="/intl/eu/gmail/about/" >Euskara</option>
                                <option value="/intl/fil/gmail/about/" >Filipino</option>
                                <option value="/intl/fr/gmail/about/" >Français</option>
                                <option value="/intl/gl/gmail/about/" >Galego</option>
                                <option value="/intl/hr/gmail/about/" >Hrvatski</option>
                                <option value="/intl/id/gmail/about/" >Indonesia</option>
                                <option value="/intl/it/gmail/about/" >Italiano</option>
                                <option value="/intl/sw/gmail/about/" >Kiswahili</option>
                                <option value="/intl/lv/gmail/about/" >Latviešu</option>
                                <option value="/intl/lt/gmail/about/" >Lietuvių</option>
                                <option value="/intl/hu/gmail/about/" >Magyar</option>
                                <option value="/intl/nl/gmail/about/" >Nederlands</option>
                                <option value="/intl/no/gmail/about/" >Norsk Bokmål (Norge)</option>
                            </select>
                        </div>

                    </div>
            </footer>
        )
    }
}


export default Footer