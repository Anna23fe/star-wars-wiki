import React from 'react';

import './ErrorComponent.css';
import errorIcon from './darth-vader.png';

const ErrorComponent = () => {
    return (
        <div className="ErrorComponent">
            <img src={errorIcon} alt="error icon" />
            <p>
                <span>something has gone wrong</span>
                <span>don`t panic! Be happy!</span>
            </p>
        </div>
    )
}

export default ErrorComponent;