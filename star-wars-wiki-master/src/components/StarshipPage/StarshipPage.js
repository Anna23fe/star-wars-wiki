import React from 'react';

import './StarshipPage.css'

import DetailsInfo from '../DetailsInfo';
import ErrorComponent from '../ErrorComponent';
import SwapiService from '../../services/SwapiService';
import Row from '../Row';
import StarshipsList from '../StarshipsList/StarshipsList';

export default class StarshipPage extends React.Component {

    swapi = new SwapiService();

    state = {
        selectedStarship: null,
        error: false,
    }

    componentDidCatch() {
        this.setState({ error: true });
    }

    onStarshipSelect = (id) => {
        this.setState({
            selectedStarship: id
        });
    }

    render() {
        if (this.state.error) {
            return <ErrorComponent />
        }

        const itemsList = (
            <StarshipsList
                onItemClick={this.onStarshipSelect}
                renderItem={(item) =>
                    `${item.name}
                        (${item.model})`
                }
            />
        );

        const detailsInfo = (
            <DetailsInfo
                itemId={this.state.selectedStarship}
                getData={this.swapi.getStarship}
                info={
                    ['starshipClass', 'length', 'passengers']
                }
                imgRef={`https://starwars-visualguide.com/assets/img/starships/`}
            />
        );

        return (
            <div className="StarshipPage">
               <Row left={itemsList} right={detailsInfo} />
            </div>
        )
    }
}