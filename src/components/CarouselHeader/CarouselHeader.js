import React from 'react';
import './CarouselHeader.scss';
import carousel1 from '../../assets/carousel1.png';
import carousel2 from '../../assets/carousel2.png';
import carousel3 from '../../assets/carousel3.png';
import { Carousel } from 'react-bootstrap';




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


    return (
        <div>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-10 carouselImg1"
                src={carouselInfo[0].image}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>{carouselInfo[0].heading}</h3>
                <h1>{carouselInfo[0].heading}</h1>
                <h6>{carouselInfo[0].little}</h6>
                <button>{carouselInfo[0].button}</button>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    )
        



    

    // const [x, setX] = useState(0);
    
    // let goLeft = () => {
    //     setX(x + 100)
    //     // x === 0 ? setX( -100 * (carouselInfo.length -1) ) : setX(x + 100)
    // }

    // let goRight = () => {
    //     setX( x - 100 )
    //     // x === -100 * ( carouselInfo.length -1 ) ? setX(0) : setX(x - 100)
    // }


    // return (
    //     <div className='slider'>
    //         { 
    //             carouselInfo.map((items, id) => {
    //               return (
    //                 <div key={id} className='slide' style={{ transform: `translateX(${x}%)`}}>
    //                     {/* {items}  */}
                        // <div>
                            // <h1>{items.heading}</h1>
                            // <h6>{items.little}</h6>
                            // <button>{items.button}</button>
                        // </div>

    //                     <img src={items.image} alt='carousel one'/>
    //                 </div>

    //               ) 
    //             })
    //         }
    //         <img src={carouselInfo.image} alt='carousel one'/>
    //         {(x === 0) ? null :  <button id='goLeft' onClick={goLeft}>Left</button> }
    //         {x > -200 && <button id='goRight' onClick={goRight}>Right</button>}
    //     </div>
    // )
}

export default CarouselHeader
