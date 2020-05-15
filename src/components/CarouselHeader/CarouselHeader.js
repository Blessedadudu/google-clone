import React, { useState } from 'react';
import './CarouselHeader.scss';
import carousel1 from '../../assets/carousel1.png';
import carousel2 from '../../assets/carousel2.png';
import carousel3 from '../../assets/carousel3.png';



const CarouselHeader = () => {
    let carouselInfo = [ {
        id: 1,
        heading: 'Write emails faster',
        little: 'Get suggestions as you type. Simply hit tab to accept and you\'re done.',
        button: 'Create an account',
        image: carousel1
    },
    {
        id: 2,
        heading: 'A faster way to reply',
        little: 'espond to emails faster with pre-suggested responses that sound just like you.',
        button: 'Create an account',
        image: carousel2
    },
    {
        id: 3,
        heading: 'Write emails faster',
        little: 'Get suggestions as you type. Simply hit tab to accept and you\'re done.',
        button: 'Create an account',
        image: carousel3
    }



];

    console.log(carouselInfo)

    const [x, setX] = useState(0);
    
    let goLeft = () => {
        setX(x + 100)
        // x === 0 ? setX( -100 * (carouselInfo.length -1) ) : setX(x + 100)
    }

    let goRight = () => {
        setX( x - 100 )
        // x === -100 * ( carouselInfo.length -1 ) ? setX(0) : setX(x - 100)
    }


    return (
        <div className='slider'>
            { 
                carouselInfo.map((items, id) => {
                  return (
                    <div key={id} className='slide' style={{ transform: `translateX(${x}%)`}}>
                        {/* {items}  */}
                        <div>
                            <h1>{items.heading}</h1>
                            <h6>{items.little}</h6>
                            <button>{items.button}</button>
                        </div>

                        <img src={items.image} alt='carousel one'/>
                    </div>

                  ) 
                })
            }
            <img src={carouselInfo.image} alt='carousel one'/>
            {(x === 0) ? null :  <button id='goLeft' onClick={goLeft}>Left</button> }
            {x > -200 && <button id='goRight' onClick={goRight}>Right</button>}
        </div>
    )
}

export default CarouselHeader
