import React from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Slider from './Slider';
import Content from './Content';
function Main() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default Main;
