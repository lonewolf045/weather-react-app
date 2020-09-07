/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './WeatherTile.css';
import './css/weather-icons.min.css';
import './css/all.min.css';
import './css/weather-icons-wind.min.css'
import Switch from './Switch';
import Footer from './Footer';

class WeatherTile extends React.Component {
  
  convertToF(celsius) {
    return celsius * 9/5 + 32;
  }
  
  handleToogle() {
    this.props.handleToogle();
    console.log(this.props.backgroundImage);
  }
  windDirection = ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"];
  src = `http://openweathermap.org/img/wn/${this.props.weather.appearance.icon}.png`
    render() {
      return (
        <div
          style = {{backgroundImage: `url(${this.props.backgroundImage.src.original})`}}
         id = 'weatherTile'>
          <div className = 'tile'>
            <div className = 'weatherName'>{this.props.weather.name},{this.props.weather.country}</div>
            {/* <div className = 'weatherDate'>{this.props.weather.date.toString()}</div> */}
            <div className = 'wIcon'>
              <div className = 'weatherIcon'><i className = {this.props.weather.appearance.iconUrl}></i></div>
            </div>
            <div className = 'wI'>
              <div className = 'wTemp'>
                {this.props.tempUnit === 'Celsius' ? <div className = 'weatherTemp'>{(this.props.weather.main.temp - 273).toFixed(0)}&#176;</div> : <div className = 'weatherTemp'>{this.convertToF(this.props.weather.main.temp - 273).toFixed(0)}&#176;</div>}
                {this.props.tempUnit === 'Celsius' ? <div className = 'weatherTempFeels'>Feels like: {(this.props.weather.main.feels_like - 273).toFixed(0)}&#176;</div> : <div className = 'weatherTempFeels'>Feels like: {this.convertToF(this.props.weather.main.feels_like - 273).toFixed(0)}&#176;</div>}
              </div>
              <div className = 'wWind'>
                <div className = 'weatherWindSpeed'><i className="fas fa-wind"></i>{(this.props.weather.wind.speed * 2.23694).toFixed(2) } MPH</div>
                <div className = 'weatherWindDirection'><i className = {this.props.weather.wind.direcUrl}/>{ this.windDirection[Math.round(this.props.weather.wind.deg / 22.5)] }</div>
              </div>
            </div>
            <div className = 'wInfo'>
              <div className = 'weatherHumidity'><i className="wi wi-humidity"></i> {(this.props.weather.main.humidity)}%</div>
              <div className = 'weatherPressure'><i className="wi wi-barometer"></i> {(this.props.weather.main.pressure)} hPa</div>
            </div>
            <Switch className = 'toogleSwitch' isOn = {this.props.isOn} onClick = {this.handleToogle.bind(this)} class = {this.props.weather.appearance.iconUrl.split(' ')[2]}/>  
          </div>
          <Footer photographer = {[this.props.backgroundImage.photographer,this.props.backgroundImage.photographer_url]}/>
        </div>
      );
    }
}

export default WeatherTile;