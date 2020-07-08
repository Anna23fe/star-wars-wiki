import React from 'react';

import './StarshipsList.css';
import SwapiService from '../../services/SwapiService';
import withData from '../helpers/withData';

const StarshipsList = (props) => {

    const {data, onItemClick, renderItem} = props;

    const renderItems = (list) => {
        return (
            list.map((item) => {
                const text = renderItem(item);
                return (
                    <li
                        key={item.id}
                        className="list-group-item"
                        onClick={() => onItemClick(item.id)}
                    >
                        {text}
                    </li>
                )
            })
        );
    }

    const elemets = renderItems(data);

    return (
        <ul className="list-group StarshipsList">
            {elemets}
        </ul>
    );
}

const { getAllStarships } = new SwapiService();
export default withData(StarshipsList, getAllStarships);