import React from 'react';
import './WeatherTile.css';
import './css/weather-icons.min.css';
import './css/all.min.css';

class WeatherTile extends React.Component {
  windDirection = ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"];
    // toTextualDescription(degree){
    //   if (degree>337.5) return 'Northerly';
    //   if (degree>292.5) return 'North Westerly';
    //   if(degree>247.5) return 'Westerly';
    //   if(degree>202.5) return 'South Westerly';
    //   if(degree>157.5) return 'Southerly';
    //   if(degree>122.5) return 'South Easterly';
    //   if(degree>67.5) return 'Easterly';
    //   if(degree>22.5){return 'North Easterly';}
    //   return 'Northerly';
    // }
  src = `http://openweathermap.org/img/wn/${this.props.weather.appearance.icon}.png`
    render() {
      return (
        <div id = 'weatherTile'>
          <div className = 'tile'>
            <div className = 'weatherName'>{this.props.weather.name},{this.props.weather.country}</div>
            <div className = 'weatherDate'>{this.props.weather.date.toString()}</div>
            <div className = 'weatherIcon'><i className = {this.props.weather.appearance.iconUrl}></i></div>
            <div className = 'weatherTemp'>{(this.props.weather.main.temp - 273).toFixed(2)} &#8451;</div>
            <div className = 'weatherTemp'>Feels like: {(this.props.weather.main.feels_like - 273).toFixed(2)} &#8451;</div>
            <div className = 'weatherHumidity'><i className="wi wi-humidity"></i>{(this.props.weather.main.humidity)}%</div>
            <div className = 'weatherHumidity'><i className="wi wi-barometer"></i>{(this.props.weather.main.pressure)}hPa</div>
            <div className = 'weatherWindSpeed'>Wind Speed: {(this.props.weather.wind.speed * 2.23694).toFixed(2) } MPH</div>
            <div className = 'weatherWindDirection'>Wind Direction: { this.windDirection[Math.round(this.props.weather.wind.deg / 22.5)] }</div>
          </div>
        </div>
      );
    }
}

export default WeatherTile;