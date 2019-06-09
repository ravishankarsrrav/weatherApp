import React, { Component } from 'react';
import axios from 'axios';

class ForecastData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      	temperature : this.props.main.temp,
        pressure : this.props.main.pressure,
        humidity : this.props.main.humidity,
        weather : this.props.weather[0].main,
        windSpeed : this.props.wind.speed,
        clouds : this.props.clouds.all,
        "time" : this.props.dt_txt,
    };
  }


    render() {
        const {  time, temperature, pressure, humidity, weather, clouds, windSpeed } = this.state;
        return (
            <tr>
              	<td className='table-data'>{time}</td>
              	<td className='table-data'>{temperature}</td>
              	<td className='table-data'>{pressure}</td>
              	<td className='table-data'>{humidity}</td>
              	<td className='table-data'>{weather}</td>
              	<td className='table-data'>{windSpeed}</td>
              	<td className='table-data'>{clouds}</td>
            </tr>
          );
    }    
}

export default ForecastData;