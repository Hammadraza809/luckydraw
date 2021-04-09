import React from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Slider from '../Main/Slider';
import Content from './Content';

function Contact() {
    return (
        <div className="App">
            <Header />
            <Slider />
            <Content/>
            <Footer/>
        </div>
    );
}

export default Contact;
