import React from 'react';

import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="Header">
            <h1><Link to="/">Star Wars Wiki</Link></h1>
            <ul className="d-flex main_nav">
                <li>
                    <Link to="/people">People</Link>
                </li>
                <li>
                    <Link to="/planets">Planets</Link>
                </li>
                <li>
                    <Link to="/starships">StarShips</Link>
                </li>
            </ul>

        </div>
    );
}

export default Header;