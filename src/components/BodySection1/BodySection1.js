import React from 'react';
import './BodySection1.scss'
import android from '../../assets/android.png';
import apple from '../../assets/apple.png';
import maxDesktop from '../../assets/maxDesktop.png';
import minDesktop from '../../assets/minDesktop.png';
import maxgmail from '../../assets/maxgmail.png';
import minGmail1 from '../../assets/minGmail1.png';
import minGmail2 from '../../assets/minGmail2.png';




const BodySection1 = () => {
    return (
        <section className='section1'>
            <div className='androidFlex'>
                <h1>Experience Gmail on any device</h1>
                <p>The ease & simplicity of Gmail, wherever you are.</p>
                <div className='appleFlex'>
                    <img src={android} alt='android'/>
                    <img src={apple} alt='apple'/>
                </div>
                <div className='center'>
                    <picture>
                        <source media="(max-width: 799px)" srcSet={minDesktop}/>
                        <img src={maxDesktop} alt='maxDesktop' className='maxDesktop'/>
                    </picture>
                </div>
            </div>
            {/* <img src={maxDesktop} alt='maxDesktop' className='maxDesktop'/> */}
           
            <div className='gmailFlex'>
                <div className='gmailFlex1'>
                    <h1>Stay organized instantly</h1>
                    <p>See what’s new at a glance, and decide what you want to read and respond to.</p>
                    <picture>
                        <source media="(max-width: 799px)" srcSet={minGmail1}/>
                        <source media="(max-width: 799px)" srcSet={minGmail2}/>
                        <img src={maxgmail} alt='maxDesktop' className='maxGmail'/>
                    </picture>
                </div>
                <div className='gmailFlex2'>
                    <h1>Never drop the ball</h1>
                    <p>Get nudges that remind you to follow up and respond to messages, so that nothing slips through the cracks.</p>
                    <picture>
                        <source media="(max-width: 799px)" srcSet={minGmail1}/>
                        <source media="(max-width: 799px)" srcSet={minGmail2}/>
                        <img src={maxgmail} alt='maxDesktop' className='maxGmail'/>
                    </picture>
                </div>
            </div>
            <div className='gmailFlex'>
                <div className='gmailFlex3'>
                    <h1>Take action right from the inbox</h1>
                    <p>View attachments, RSVP to events, snooze messages and more without opening any emails.</p>
                    
                </div>
                <div className='gmailFlex4'>
                    <picture>
                        <source media="(max-width: 799px)" srcSet={minGmail1}/>
                        <source media="(max-width: 799px)" srcSet={minGmail2}/>
                        <img src={maxgmail} alt='maxDesktop' className='maxGmail'/>
                    </picture>
                </div>
            </div>
            <div className='gmailFlex'>
                <div className='gmailFlex2'>
                    <picture>
                        <source media="(max-width: 799px)" srcSet={minGmail1}/>
                        <source media="(max-width: 799px)" srcSet={minGmail2}/>
                        <img src={maxgmail} alt='maxDesktop' className='maxGmail'/>
                    </picture>
                </div>
                <div className='gmailFlex1'>
                    <h1>Take action right from the inbox</h1>
                    <p>View attachments, RSVP to events, snooze messages and more without opening any emails.</p>
                </div>
            </div>
            <div className='gmailFlex'>

                <div className='gmailFlex1'>
                    <h1>Take action right from the inbox</h1>
                    <p>View attachments, RSVP to events, snooze messages and more without opening any emails.</p>
                </div>
            </div>
        </section>
    )
}

export default BodySection1
