// Component : Cities
// Desc : Table to list cities
// Use case : used in all cities page

import React, { Component } from 'react';
import './forecast.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Loader from '../loader/loader';
import ForecastData from '../forecastData/forecastData';
import axios from 'axios';

class Forecast extends Component {
	constructor() {
		super();
		this.state = {
		  forecasts : [],	
	      loading : false,
	      errorMsg : '',
	      successMsg : '',
	      city : '',
	    };
	}

	componentDidMount() {
		this.getCityForecastWeather();
  	}

    getCityForecastWeather() {
	    const self = this;
	    this.setState({
	      loading : true
	    });
	    const cityID  = window.location.pathname.split("/").pop();
	    const unit = "metric";
	    const AppID = "109b3f22786b6c3e4b3a76efb21549b1";
	    const url = `http://api.openweathermap.org/data/2.5/forecast?id=${cityID}&APPID=${AppID}&units=${unit}`;
	    axios.get(url)
	        .then(res => self.onGetCityForecastSuccess(res.data))
	        .catch(error => self.onGetCityForecastFailure(error));
    }

    onGetCityForecastSuccess(res) {
    	this.setState({
    		forecasts : res.list,
    		city : res.city.name,
    		loading : false
    	})
	}

	onGetCityForecastFailure(error) {
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
		const { loading, forecasts, errorMsg, successMsg, city } = this.state;
		const displayError = (errorMsg != '') ? '' : 'hidden';
		const dataItems = [];
		const emptyForecastClass = (forecasts.length == 0) ? '' : 'hidden';
		forecasts.forEach((forecast, index) => {
	      	dataItems.push(<ForecastData key={index} {...forecast}/>);
	    });
	    const cityName = (forecasts.length == 0) ? "" : "--";
		return (
		<div>
		<Header/>
		<Loader loading={loading} />	
			<div className='container'>
		        <div className='col-sm-12 forecast-content'>
		        <Loader loading={loading} />
		          <p className='forecast-info'>Weather forecast of {city} city </p>
		              	<div className={`mt-3 col-sm-12 col-lg-12 ${displayError} no-padding`}>
		                	<div className='alert-danger alert col-sm-10 col-lg-10'>
		                	{errorMsg}
		                	</div>
		              	</div>
		            <div className='col-sm-12 header-box mt-3'><h6>Forecast</h6></div> 
		            <div className='col-sm-12 content-box no-padding mt-3'>
		              	<table className='table table-hover'>
		                	<thead>
			                  	<tr>
			                    	<th className='table-head'>Time</th>
			                    	<th className='table-head'>Temperature (in Celsius)</th>
			                    	<th className='table-head'>Pressure (in hPa)</th>
			                    	<th className='table-head'>Humidity (in %)</th>
			                    	<th className='table-head'>Weather</th>
			                    	<th className='table-head'>Wind ( in meter/sec)</th>
			                    	<th className='table-head'>Clouds (in %)</th>
		                  		</tr>
		                	</thead>
		                	<tbody>
		                  	{dataItems}
		                  	<tr className={emptyForecastClass}>
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

export default Forecast;