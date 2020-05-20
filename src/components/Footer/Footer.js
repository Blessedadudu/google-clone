import React, { Component } from 'react';
import './Footer.scss';
import circlehelp from '../../assets/SVG/help-with-circle.svg'

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                    <h2>Google</h2>
                    <div>
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
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>

                    </div>
            </footer>
        )
    }
}


export default Footer