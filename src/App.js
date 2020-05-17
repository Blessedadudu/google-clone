import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import CarouselHeader from './components/CarouselHeader/CarouselHeader';

function App() {
  return ( 
    <div>
     <Navbar/>
     <Header/>
     <CarouselHeader/>
     <Header/>
    </div>
  );
}

export default App;
