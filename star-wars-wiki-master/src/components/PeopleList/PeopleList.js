import React from 'react';

import './PeopleList.css';
import SwapiService from '../../services/SwapiService';
import withData from '../helpers/withData';

const PeopleList = (props) => {

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
        <ul className="list-group PeopleList">
            {elemets}
        </ul>
    );
}

const { getAllPeople } = new SwapiService();
export default withData(PeopleList, getAllPeople);