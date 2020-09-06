import React from 'react';
import './App.css';
import './css/weather-icons.min.css';
import './css/all.min.css';
import WeatherTile from './WeatherTile';
import Header from './Header';
import { createClient } from 'pexels';



const getIconClass = (icon) => {
  const classes = {
    '01d': 'fas fa-sun sun',
    '01n': 'fas fa-moon moon',
    '02d': 'fas fa-cloud-sun rain-sun',
    '02n': 'fas fa-cloud-moon rain-moon',
    '03d': 'fas fa-cloud day',
    '03n': 'fas fa-cloud night',
    '04d': 'fas fa-cloud-meatball day',
    '04n': 'fas fa-cloud-meatball night',
    '09d': 'fas fa-cloud-showers-heavy day',
    '09n': 'fas fa-cloud-showers-heavy night',
    '10d': 'fas fa-cloud-sun-rain rain-sun',
    '10n': 'fas fa-cloud-moon-rain rain-moon',
    '11d': 'fas fa-bolt bolt-day',
    '11n': 'fas fa-bolt bolt-night',
    '13d': 'far fa-snowflake day',
    '13n': 'far fa-snowflake night',
    '50d': 'fas fa-smog day',
    '50n': 'fas fa-smog night',
  };
  return classes[icon];
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather : null,
      city : '',
      tempUnit: 'Celsius',
      isOn: true,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleData = this.handleData.bind(this);
    this.handleToogle = this.handleToogle.bind(this);
  }
  componentWillMount() {
    this.handleSubmit('New Delhi');
  }

  handleToogle() {
    let unit;
    if(this.state.tempUnit === 'Celsius') {
      unit = 'Fahrenhiet';
    } else {
      unit = 'Celsius';
    }
    console.log('Entered');
    this.setState(prevState => ({
      isOn : !prevState.isOn,
      tempUnit : unit
    }), () => {console.log(this.state)});
  }

  handleData(weatherData) {
    this.setState({
      weather : {
        appearance : weatherData.weather[0],
        main : weatherData.main,
        wind : weatherData.wind,
        name : weatherData.name,
        country : weatherData.sys.country,
        date : new Date(weatherData.dt*1000-(weatherData.timezone*1000)),
        backgroundImage: weatherData.backgroundImage
      }
    },() => {console.log(this.state.weather,this.state)});
  }

  async getBackgroundImage(weatherData) {
    const client = createClient('563492ad6f91700001000001f0bee6436bc64621b8f0736144ac4671');
    const query = `${weatherData.weather[0].description}`;
    let queryResult = await client.photos.search({query,per_page: 1,page: Math.round(Math.random() * 100)});
    console.log(queryResult.photos[0]);
    return queryResult.photos[0];
  }

  async getWeather(ecity) {
    try {
        //let apiKey = `e1a30bf2f5ec7db7e65fcfac6fc61d03`;
        let responseUrl = `http://api.openweathermap.org/data/2.5/weather?q=${ecity}&appid=e1a30bf2f5ec7db7e65fcfac6fc61d03`;
        let response = await fetch(responseUrl, {mode: 'cors'});
        let weatherData = await response.json();
        console.log(weatherData);
        //let iconUrl = await fetch(`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`, {mode: 'cors'});
        weatherData.weather[0].iconUrl = getIconClass(weatherData.weather[0].icon);
        weatherData.wind.direcUrl = `wi wi-wind towards-${weatherData.wind.deg}-deg`;
        weatherData.backgroundImage = await this.getBackgroundImage(weatherData);
        this.handleData(weatherData);
    } catch(err) {
        console.error(err);
    }
  }

  handleSubmit(enteredCity) {
    console.log('Pressed');
    this.setState({
      city : enteredCity,
      weather : null
    },() => this.getWeather(this.state.city)); 
    //let city = input.value;

  }
  render() {
    return (
      <div id = 'container'>
        <Header handleSubmit = {this.handleSubmit}/>
        {this.state.weather ? <WeatherTile weather = {this.state.weather} isOn = {this.state.isOn} tempUnit = {this.state.tempUnit} handleToogle = {this.handleToogle} backgroundImage = {this.state.weather.backgroundImage} /> : <div />} 
      </div>
    );
  }
}

export default App;
