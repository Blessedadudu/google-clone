import React, { useState } from 'react';
import './CarouselHeader.scss'


const CarouselHeader = () => {
    let carouselInfo = [ 1, 2,3,4,5 ];

    const [x, setX] = useState(0)
    return (
        <div className='slider'>
            { 
                carouselInfo.map((items, id) => {
                  return (
                    <div key={id} className='slide'  style={{ transform: `transform(${x}%)`}}>
                        {items} 
                    </div>
                  ) 
                })
            }
            <button id='goLeft'>Left</button>
            <button id='goRight'>Right</button>
        </div>
    )
}

export default CarouselHeader
