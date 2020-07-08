import React from 'react';

import './PlanetPage.css'

import DetailsInfo from '../DetailsInfo';
import ErrorComponent from '../ErrorComponent';
import SwapiService from '../../services/SwapiService';
import Row from '../Row';
import PlanetsList from '../PlanetsList/PlanetsList';

export default class PlanetPage extends React.Component {

    swapi = new SwapiService();

    state = {
        selectedPlanet: null,
        error: false,
    }

    componentDidCatch() {
        this.setState({ error: true });
    }

    onPlanetSelect = (id) => {
        this.setState({
            selectedPlanet: id
        });
    }

    render() {
        if (this.state.error) {
            return <ErrorComponent />
        }

        const itemsList = (
            <PlanetsList
                onItemClick={this.onPlanetSelect}
                renderItem={(item) =>
                    `${item.name}
                        (${item.diameter}km)`
                }
            />
        );

        const detailsInfo = (
            <DetailsInfo
                itemId={this.state.selectedPlanet}
                getData={this.swapi.getPlanet}
                info={
                    ['diameter', 'population', 'gravity']
                }
                imgRef={`https://starwars-visualguide.com/assets/img/planets/`}
            />
        );

        return (
            <div className="PlanetPage">
               <Row left={itemsList} right={detailsInfo} />
            </div>
        )
    }
}