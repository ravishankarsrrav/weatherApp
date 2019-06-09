// Component : Cities
// Desc : Table to list cities
// Use case : used in all cities page

import React, { Component } from 'react';
import './cities.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Loader from '../loader/loader';
import City from '../city/city';
import axios from 'axios';

class Cities extends Component {
	constructor() {
		super();
		this.state = {
	      cities : [],
	      loading : false,
	      errorMsg : '',
	      successMsg : '',
	    };
	}

	componentDidMount() {
      	this.getCities();
  	}

  	getCities() {
	    const self = this;
	    this.setState({
	      loading : true
	    });
	    axios.get('/api/v1/city/0/20')
	        .then(res => self.onGetCitiesSuccess(res.data))
	        .catch(error => self.onGetCitiesFailure(error));
  	}

  	onGetCitiesSuccess(res) {
	    if(res.success) {
	      this.setState({
	        loading : false,
	        cities : res.cities
	      });
	    } else {
	      this.setState({
	        errorMsg : 'Internal server error. Please try again',
	        loading : false
	      });
	    }
	}

	onGetCitiesFailure(error) {
	    if(error.response) {
	      this.setState({
	        errorMsg : (error.response.data.message) ? error.response.data.message : 'Internal server error. Please try again',
	        loading : false
	      });
	    } else {
	      this.setState({
	        errorMsg : 'Internal server error. Please try again',
	        loading : false
	      });
	    }
	}

	render() {
		const { loading, cities, errorMsg, successMsg } = this.state;
		const displayError = (errorMsg != '') ? '' : 'hidden';
		const dataItems = [];
		const emptyCitiesClass = (cities.length == 0) ? '' : 'hidden';
		cities.forEach((city, index) => {
	      	dataItems.push(<City key={index} {...city}/>);
	    });
		return (
		<div>
		<Header/>
		<Loader loading={loading} />	
			<div className='container'>
		        <div className='col-sm-12 cities-content'>
		        <Loader loading={loading} />
		          <p className='cities-info'>Current weather of cities</p>
		              	<div className={`mt-3 col-sm-12 col-lg-12 ${displayError} no-padding`}>
		                	<div className='alert-danger alert col-sm-10 col-lg-10'>
		                	{errorMsg}
		                	</div>
		              	</div>
		            <div className='col-sm-12 header-box mt-3'><h6>Cities</h6></div> 
		            <div className='col-sm-12 content-box no-padding mt-3'>
		              	<table className='table table-hover'>
		                	<thead>
			                  	<tr>
			                    	<th className='table-head'>Name</th>
			                    	<th className='table-head'>Country</th>
			                    	<th className='table-head'>Temperature (in Celsius)</th>
			                    	<th className='table-head'>Pressure (in hPa)</th>
			                    	<th className='table-head'>Humidity (in %)</th>
			                    	<th className='table-head'>Weather</th>
			                    	<th className='table-head'>Wind ( in meter/sec)</th>
			                    	<th className='table-head'>Clouds (in %)</th>
			                    	<th className='table-head'>Forecast</th>
		                  		</tr>
		                	</thead>
		                	<tbody>
		                  	{dataItems}
		                  	<tr className={emptyCitiesClass}>
		                    	<td colSpan='8' className='table-data'>No results.</td>
		                  	</tr>
		                	</tbody>
		              	</table>
		            </div>
		        </div>
		    </div>
		<Footer/>    
		</div>       
		    );
	}
}

export default Cities;