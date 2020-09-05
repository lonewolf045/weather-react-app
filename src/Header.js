import React from 'react';
import './Header.css';
import './css/all.min.css';

class Header extends React.Component {
    setCity (event) {
      this.props.detail.enteredCity = event.target.value;
    }
    handleSubmit(e) {
      console.log(this.props.detail.enteredCity);
      this.props.handleSubmit(this.props.detail.enteredCity);
    }
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <div className = 'heading'>
              Weather
            </div>
            <div className = 'locationSearch'>
              <input className = 'locationInput' onChange = {this.setCity.bind(this)}></input>
              <button className = 'locationSubmit' onClick = {this.handleSubmit.bind(this)}><i className="fas fa-search"></i></button>
            </div>  
          </header>
        </div>
      );
    }
  }
Header.defaultProps = {
    detail : {
        enteredCity : ''
    }
}

export default Header;

