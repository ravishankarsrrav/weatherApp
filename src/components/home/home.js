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
              <h1>Accurate weather forecast <br></br> of  around 16000 cities <br></br> from the world
               is available.</h1>
              <div className="weather-btn-block">
                <a href="/signup" className="shadow">All Cities Weather</a>
                <p>Find your city weather forecast by clicking above button.</p>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;