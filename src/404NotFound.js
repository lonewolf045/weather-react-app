import React from 'react';
import './404NotFound.css';
import './css/all.min.css';

class NotFound extends React.Component{
    render() {
        return (
            <div className = 'notFound'>
                <div className = 'errorMessage'>
                    <i className="fas fa-exclamation-triangle error-icon"></i>
                    <div>Error 404: Not Found</div>
                </div>
            </div>
        );
    }
}

export default NotFound;