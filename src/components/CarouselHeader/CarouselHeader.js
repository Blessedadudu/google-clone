import React from 'react';
import './CarouselHeader.scss';
import carousel1 from '../../assets/carousel1.png';
import carousel2 from '../../assets/carousel2.png';
import carousel3 from '../../assets/carousel3.png';
import carousel3A from '../../assets/carousel3A.png';
import carousel1A from '../../assets/carousel1A.png';
import carousel2A from '../../assets/carousel2A.png';







const CarouselHeader = () => {
    let carouselInfo = [ {
        id: 1,
        heading: 'Get more done with Gmail',
        little: 'Join video meetings with live captioning and screen sharing for up to 100 people — now with Google Meet in Gmail',
        button: 'Create an account',
        image: carousel1
    },
    {
        id: 2,
        heading: 'Write emails faster',
        little: 'Get suggestions as you type. Simply hit tab to accept and you\'re done.',
        button: 'Create an account',
        image: carousel2
    },
    {
        id: 3,
        heading: 'A faster way to reply',
        little: 'Respond to emails faster with pre-suggested responses that sound just like you.',
        button: 'Create an account',
        image: carousel3
    }
];



    console.log(carouselInfo)

    return (
        <div className="container">
            
            <input type="radio" id="i1" name="images" defaultChecked />
            <input type="radio" id="i2" name="images" />
            <input type="radio" id="i3" name="images" />	
            
            <div className="slide_img" id="one">
                    <div className='imageFlex'>
                        <div className='imageAbs'>
                            <h1>{carouselInfo[0].heading}</h1>
                            <p>{carouselInfo[0].little}</p>
                            <button className='hidebutton'>{carouselInfo[0].button}</button>
                            {/* <h5 className='hideMinButton'>Get Gmail</h5> */}
                        </div> 
                        <picture>
                            <source media="(max-width: 1080px)" srcSet={carousel1A}/>
                            <img src={carousel1} alt='caroimage'/>
                        </picture>
                        <h5 className='hideMinButton'>Get Gmail</h5>

                    </div>			   

                    
                        <label className="prev" htmlFor="i3"><span>&#x2039;</span></label>
                        <label className="next" htmlFor="i2"><span>&#x203a;</span></label>	
            </div>
            
            <div className="slide_img" id="two">
                    <div className='imageFlex'>
                        <div className='imageAbs'>
                            <h1>{carouselInfo[1].heading}</h1>
                            <p>{carouselInfo[1].little}</p>
                            <button className='hidebutton'>{carouselInfo[1].button}</button>
                            {/* <h5 className='hideMinButton'>Get Gmail</h5> */}
                        </div> 
                        <picture>
                            <source media="(max-width: 1080px)" srcSet={carousel2A}/>
                            <img src={carousel2} alt='caroimage' className='carousel23'/>
                        </picture>
                        <h5 className='hideMinButton'>Get Gmail</h5>

                    </div>	
                     
                <label className="prev" htmlFor="i1"><span>&#x2039;</span></label>
                <label className="next" htmlFor="i3"><span>&#x203a;</span></label>
            </div>
                    
            <div className="slide_img" id="three">
                    <div className='imageFlex'>
                        <div className='imageAbs'>
                            <h1>{carouselInfo[2].heading}</h1>
                            <p>{carouselInfo[2].little}</p>
                            <button className='hidebutton'>{carouselInfo[2].button}</button>
                            {/* <h5 className='hideMinButton'>Get Gmail</h5> */}
                        </div> 
                        <picture>
                            <source media="(max-width: 1080px)" srcSet={carousel3A}/>
                            <img src={carousel3} alt='caroimage' className='carousel23'/>
                        </picture>
                        <h5 className='hideMinButton'>Get Gmail</h5>

                    </div>	
                
                    <label className="prev" htmlFor="i2"><span>&#x2039;</span></label>
                    <label className="next" htmlFor="i1"><span>&#x203a;</span></label>
            </div>

            <div className="nav_slide">
                <label htmlFor="i1" className="dots" id="dot1"></label>
                <label htmlFor="i2" className="dots" id="dot2"></label>
                <label htmlFor="i3" className="dots" id="dot3"></label>
            </div>
                
        </div>
    )
}

export default CarouselHeader
