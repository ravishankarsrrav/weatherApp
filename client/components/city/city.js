import React, { Component } from 'react';
import axios from 'axios';

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	cityID : this.props.id,
      	cityName : this.props.name,
      	country : this.props.country,
      	temperature : "--",
      	pressure : "--",
      	humidity : "--",
      	weather : "--",
      	windSpeed : "--",
      	clouds : "--",
    };
  }

  componentDidMount() {
      	this.getCityCurrentWeather();
  	}

  	getCityCurrentWeather() {
	    const self = this;
	    const { cityID }  = this.state;
	    const unit = "metric";
	    const AppID = "109b3f22786b6c3e4b3a76efb21549b1";
	    const url = `http://api.openweathermap.org/data/2.5/weather?id=${cityID}&APPID=${AppID}&units=${unit}`;
	    axios.get(url)
	        .then(res => self.onGetCityCurrentWeatherSuccess(res.data))
	        .catch(error => self.onGetCityCurrentWeatherFailure(error));
  	}

  	onGetCityCurrentWeatherSuccess(res) {
      	this.setState({
        	temperature : res.main.temp,
        	pressure : res.main.pressure,
        	humidity : res.main.humidity,
        	weather : res.weather[0].main,
        	windSpeed : res.wind.speed,
        	clouds : res.clouds.all
      	});
	}

	onGetCityCurrentWeatherFailure(error) {
	    this.setState({
        	temperature : "error",
        	pressure : "error",
        	humidity : "error",
        	weather : "error",
        	visibility : "error",
        	windSpeed : "error",
        	clouds : "error"
      	});
	}


  render() {
    const { cityID, cityName, country, temperature, pressure, humidity, weather, clouds, windSpeed } = this.state;
    return (
        <tr>
          	<td className='table-data'>{cityName}</td>
          	<td className='table-data'>{country}</td>
          	<td className='table-data'>{temperature}</td>
          	<td className='table-data'>{pressure}</td>
          	<td className='table-data'>{humidity}</td>
          	<td className='table-data'>{weather}</td>
          	<td className='table-data'>{windSpeed}</td>
          	<td className='table-data'>{clouds}</td>
          	<td className='table-data'><button className='btn btn-sm btn-info' type='button'>Forecast</button></td>
        </tr>
      );
  }    
}

export default City;