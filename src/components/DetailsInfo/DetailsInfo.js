import React from 'react';

import './DetailsInfo.css';
import SwapiService from '../../services/SwapiService';

export default class DetailsInfo  extends React.Component {
swapi = new SwapiService();

state = {person: null}

componentDidMount() {
    this.updatePerson();
}

componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId){ 
    this.updatePerson();
}
}

updatePerson() {
    const {personId} = this.props;
    if(!personId) {
        return;
    }
    this.swapi.getPerson(personId).then((person) => {
        this.setState ({person});
    })
}
    
    render() {
        
            if (!this.state.person){
                return <p>please, select person</p>
            }

            const { id, name, mass, birthDate, gender} = this.state.person;

         return (
        <div className="DetailsInfo">
            <h3>{name}</h3>
            <div className="d-flex info_block">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="planet" />
            <ul className="detail_info_block">
                <li>
                    <span>mass</span>
                    <span>{mass}</span>
                </li>
                <li>
                    <span>birth date </span>
                    <span>{birthDate}</span>
                </li>
                <li>
                    <span>gender</span>
                    <span>{gender}</span>
                </li>
            </ul>
            </div>
        </div>
    );
}
}