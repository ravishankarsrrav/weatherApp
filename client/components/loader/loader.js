// Component : Loader
// Desc : Theme Loader for a application
// Use case : Can be used in all the pages as a loader

import React, { Component } from 'react';
import './loader.css';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading : this.props.loading
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      loading : nextProps.loading
    });
  }
  
  render() {
    const {loading} = this.state;
    let loadingClass = loading ? 'loading' : 'hidden';
    return (
      <div className={loadingClass}>
        <div className="loading_content">
          <div className='loading-flex-center'>
            <img src="/static/images/logo_small.png" />
            <div className='loadingpoints'>
              <i></i>
              <i></i>
              <i></i>
              <i></i> 
            </div>
          </div>  
        </div>
      </div>
    );
  }    
}


export default Loader;