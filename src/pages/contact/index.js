import React from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Content from './Content';
import './Content.css'

function Contact() {
    return (
        <div className="App">
            <Header />
            <Content/>
            <Footer/>
        </div>
    );
}

export default Contact;
