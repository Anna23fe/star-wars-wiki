import React from 'react';

import './ItemsList.css';
import SwapiService from '../../services/SwapiService';
import Loader from '../Loader';

export default class ItemsList extends React.Component {
    
    swapi = new SwapiService();
    state = {
        people: null,
    }
    
    componentDidMount() {
        this.swapi.getAllPeople().then((people) => {
            this.setState({
                people:people
            })  
        });
    }

    renderItems(arr) {
        return arr.map((item) => {
            return (
                <li 
                className="list-group-item"
                key={item.id}
                onClick={() => this.props.onItemClick(item.id) }
                > 
                {item.name}
                </li>
            );
        });
    }

    render() {
       
        const {people} = this.state;
        if(!people) {
            return <Loader />
        }

        const items = this.renderItems(people);

    return(
        <ul className="ItemsList">
         {items}
        </ul>
    );
}
}
