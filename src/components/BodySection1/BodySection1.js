import React from 'react';
import './BodySection1.scss'
import android from '../../assets/android.png';
import apple from '../../assets/apple.png';
import maxDesktop from '../../assets/maxDesktop.png';
import minDesktop from '../../assets/minDesktop.png';

const BodySection1 = () => {
    return (
        <section className='section1'>
            <div className='androidFlex'>
                <h1>Experience Gmail on any device</h1>
                <p>The ease & simplicity of Gmail, wherever you are.</p>
                <div>
                    <img src={android} alt='android'/>
                    <img src={apple} alt='apple'/>
                </div>
            </div>
            <picture>
                <source media="(max-width: 799px)" srcset={minDesktop}/>
                <img src={maxDesktop} alt='caroimage'/>
            </picture>
        </section>
    )
}

export default BodySection1
