import React from 'react';

import './ItemsList.css';
import SwapiService from '../../services/SwapiService';

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
        const items = this.renderItems(people);
        const {people} = this.state;
        if(!people) {
            return <Loader />
        }

    return(
        <ul className="ItemsList">
            <li>
                First person
            </li>
            <li>
                Second person
            </li>
            <li>
                Third person
            </li>
        </ul>
    )
}
}
