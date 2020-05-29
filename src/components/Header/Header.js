import React from 'react';
import './Header.css';

const Header = () => {
    return (
    <div className="Header">
        <h1>Star Wars Wiki</h1>
        <ul className="d-flex main_nav">
            <li>
                <a href=" ">People</a>
            </li>
            <li>
                <a href=" ">Planet</a>
            </li>
            <li>
                <a href=" ">Ships</a>
            </li>
        </ul>

    </div>
    );
}

export default Header;