import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import CarouselHeader from './components/CarouselHeader/CarouselHeader';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return ( 
    <div>
     <Navbar/>
     <Header/>
     <CarouselHeader/>
    </div>
  );
}

export default App;
