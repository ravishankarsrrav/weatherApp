// Component : Home
// Desc : Front Page of the application
// Use case : Used as a front Page of the application

import React, { Component } from 'react';
import './home.css';
import Header from '../header/header';
import Footer from '../footer/footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="home_banner">
            <div className="container">
                <div className="details">
                    <h1>Accurate weather forecast <br></br> of  around 16000 cities <br></br> from worldwide
                   is available.</h1>
                    <div className="weather-btn-block">
                    <a href="/all-cities" className="shadow-lg">All Cities Weather</a>
                    <p>Find your city weather forecast by clicking above button.</p>
                    </div>
                </div>
              </div>
        </div>
        <div className="container">
            <h1 className="why-us mt-4">Why Weather App ?</h1>
            <p className="text-justify wu-desc">Weather forecasting is the application of science and technology to predict the conditions of the atmosphere
             for a given location and time. People have attempted to predict the weather informally for millennia 
                and formally since the 19th century. Weather forecasts are made by collecting quantitative data about the current
                 state of the atmosphere at a given place and using meteorology to project how the atmosphere will change. Random description please Ignore. </p>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;