import React from 'react';

import './PeoplePage.css';

import PeoplesList from '../PeopleList';
import ErrorComponent from '../ErrorComponent';
import DetailsInfo from '../DetailsInfo';
import SwapiService from '../../services/SwapiService';
import Row from '../Row';


export default class PeoplePage extends React.Component{

    swapi = new SwapiService();

    state = {
        selectedPerson: null,
        error: false
    }

    componentDidCatch() {
        this.setState({error: true});
    }

    onPersonSelect = (id) => {
        this.setState({
            selectedPerson: id
        });

    }

    render() {
        if (this.state.error){
            return <ErrorComponent/>
        }

        const { selectedPerson } = this.state;

        const PeopleItemsList = (
            <PeoplesList
                onItemClick={this.onPersonSelect}
                renderItem={(item) =>
                    `${item.name} (${item.gender}, ${item.mass}kg)`}
            />
        );

        const PeopleDetailsInfo = (
            <DetailsInfo
                itemId={selectedPerson}
                getData={this.swapi.getPerson}
                info={
                    ['gender', 'mass', 'birthDate']
                }
                imgRef={`https://starwars-visualguide.com/assets/img/characters/`}
            />
        );

        return (
            <div className="PeoplePage">
                <Row left={PeopleItemsList} right={PeopleDetailsInfo}/>
            </div>
        )
    }
}