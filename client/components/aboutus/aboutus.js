// Component : AboutUs
// Desc : About us page of the application
// Use case : Used as a about us page of the application

import React, { Component } from 'react';
import './aboutus.css';
import Header from '../header/header';
import Footer from '../footer/footer';

class AboutUs extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="home_banner">
            <div className="container">
                <div className="details">
                    <h1>About us</h1>
                </div>
            </div>
        </div>
        <div className="container">
            <h1 className="what-we-do mt-4">What we do ?</h1>
            <p className="text-justify wwd-desc">Weather forecasting is the application of science and technology to 
            predict the conditions of the atmosphere for a given location and time. 
            People have attempted to predict the weather informally for millennia and formally since the 19th century.
            Weather forecasts are made by collecting quantitative data about the current state of the atmosphere
            at a given place and using meteorology to project how the atmosphere will change. Random description please Ignore.  </p>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default AboutUs;