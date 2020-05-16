import React from 'react';
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

    return (
        <div className="container">
            
            <input type="radio" id="i1" name="images" defaultChecked />
            <input type="radio" id="i2" name="images" />
            <input type="radio" id="i3" name="images" />	
            
            <div className="slide_img" id="one">			
                    
                    <img src={carousel1} alt='caroimage'/>
                    
                        <label className="prev" htmlFor="i3"><span>&#x2039;</span></label>
                        <label className="next" htmlFor="i2"><span>&#x203a;</span></label>	
                
            </div>
            
            <div className="slide_img" id="two">
                
                    <img src="https://preview.ibb.co/e5OShF/cropped_800_480_111290.jpg" alt='caroimge' />
                    
                        <label className="prev" htmlFor="i1"><span>&#x2039;</span></label>
                        <label className="next" htmlFor="i3"><span>&#x203a;</span></label>
                
            </div>
                    
            <div className="slide_img" id="three">
                    <img src='http://wallpaperswide.com/download/up_house-wallpaper-1280x800.jp' alt='carouimage' />	
                    
                        <label className="prev" htmlFor="i2"><span>&#x2039;</span></label>
                        <label className="next" htmlFor="i1"><span>&#x203a;</span></label>
            </div>

            <div id="nav_slide">
                <label htmlFor="i1" className="dots" id="dot1"></label>
                <label htmlFor="i2" className="dots" id="dot2"></label>
                <label htmlFor="i3" className="dots" id="dot3"></label>
            </div>
                
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
    //     <div classNameName='slider'>
    //         { 
    //             carouselInfo.map((items, id) => {
    //               return (
    //                 <div key={id} className='slide' style={{ transhtmlForm: `translateX(${x}%)`}}>
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
