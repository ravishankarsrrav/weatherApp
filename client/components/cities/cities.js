// Component : Cities
// Desc : Table to list cities
// Use case : used in all cities page

import React, { Component } from 'react';
import './cities.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Loader from '../loader/loader';

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
	render() {
		const { loading, cities, errorMsg, successMsg } = this.state;
		const displayError = (errorMsg != '') ? '' : 'hidden';
		const dataItems = [];
		const emptyCitiesClass = (cities.length == 0) ? '' : 'hidden';
		return (
		<div>
		<Header/>	
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
			                    	<th className='table-head'>Temperature</th>
			                    	<th className='table-head'>Pressure</th>
			                    	<th className='table-head'>Humidity</th>
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