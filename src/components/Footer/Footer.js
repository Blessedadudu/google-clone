import React, { Component } from 'react';
import './Footer.scss'

class Footer extends Component {
    render() {
        return (
            <Footer className='footer'>
                    <h2>Google</h2>
                    <div>
                        <p>Privacy </p>
                        <p> Terms</p>
                        <p>About Google</p>
                        <p> Google Products</p>
                        <p> Our policy</p>
                    </div>
                    <div>
                        <p>logo</p>
                        <p>Help</p>
                        <p>Select Language</p>

                    </div>
            </Footer>
        )
    }
}


export default Footer