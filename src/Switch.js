import React from 'react';
import './Switch.css';
import './css/weather-icons.min.css';

class Switch extends React.Component {
    assignIcons() {
        if(this.props.isOn === true) {
            return 'wi wi-celsius left';
        } else {
            return 'wi wi-fahrenheit right';
        }
    }
    assignClass() {
        if(this.props.isOn === true) {
            return 'left';
        } else {
            return 'right';
        }
    }
    render() {
        return (
            <>
            <input
                checked = {this.props.isOn}
                onChange= {() => {this.props.onClick();}}
                // checked={this.props.isOn}
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                className={`react-switch-label`}
                htmlFor={`react-switch-new`}
            >
                <i className = {`${this.assignIcons()} tempIcon`}/>
                <span className={`react-switch-button`} />
            </label>
            </>
        );
    }
};

export default Switch;