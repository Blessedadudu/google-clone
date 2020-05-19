import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
// import Header from './components/Header/Header';
import CarouselHeader from './components/CarouselHeader/CarouselHeader';
import BodySection from './components/BodySection/BodySection';
import Footer from './components/Footer/Footer';

function App() {
  return ( 
    <div>
      <Navbar/>
      <CarouselHeader/>
        {/* <Header/> */}
      <BodySection/>
      <Footer/>
    </div>
  );
}

export default App;
