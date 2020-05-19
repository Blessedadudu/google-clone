import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import CarouselHeader from './components/CarouselHeader/CarouselHeader';
import BodySection1 from './components/BodySection1/BodySection1';

function App() {
  return ( 
    <div>
     <Navbar/>
     <CarouselHeader/>
       {/* <Header/> */}
     <BodySection1/>
    </div>
  );
}

export default App;
