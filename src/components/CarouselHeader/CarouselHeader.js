import React, { useState } from 'react';
import './CarouselHeader.scss'


const CarouselHeader = () => {
    let carouselInfo = [ 1, 2,3,4,5 ];

    const [x, setX] = useState(0);
    
    let goLeft = () => {
        setX( x + 100 )
    }

    let goRight = () => {
        setX( x - 100 )
    }

    return (
        <div className='slider'>
            { 
                carouselInfo.map((items, id) => {
                  return (
                    <div key={id} className='slide' style={{ transform: `translateX(${x}%)`}}>
                        {items} 
                    </div>
                  ) 
                })
            }
            <button id='goLeft' onClick={goLeft}>Left</button>
            <button id='goRight' onClick={goRight}>Right</button>
        </div>
    )
}

export default CarouselHeader
