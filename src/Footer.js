/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './Footer.css';
import './css/all.min.css';

class Footer extends React.Component {
    render() {
        return (
            <div className = 'footer'>
                <div className = 'pexelLogo flexI'>
                    <a href="https://www.pexels.com" target = '_blank'>
                        <img className = 'logo' src="https://images.pexels.com/lib/api/pexels-white.png" alt = 'Pexel'/>
                    </a>
                </div>
                <div className = 'photographer flexI'>
                    Clicked by : <a href = {this.props.photographer[1]} target = '_blank'>{this.props.photographer[0]}</a>
                </div>
                <div className = 'oWM flexI'>
                    <a href = 'https://openweathermap.org/' target = '_blank'>
                        <img className = 'logo' src = "https://19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com/wp-content/uploads/OPENWEATHER-300x136.png" alt = 'OWM' />
                    </a>
                </div>
                <div className = 'gitHub flexI'>
                    <a href = 'https://github.com/lonewolf045/weather-react-app' target = '_blank'><i class="fab fa-github"/></a>
                </div>
            </div>
        );
    }
}

export default Footer;