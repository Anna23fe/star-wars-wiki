import React from 'react';

import './RandomPlanet.css';
import SwapiService from '../../services/SwapiService';
import ErrorComponent from '../ErrorComponent';

export default class RandomPlanet extends React.Component{

    constructor() {
        super();     
    }

    swapi = new SwapiService();
    state = {
        id: 3,
        name: null,
        diametr: null,
        population: null,
        gravity: null,
    }

    state = {
        planet: {},
        load: true,
        error: false,
    }

    componentDidMount() {
        this.updatePlanet();
        this.interval=setInterval(this.updatePlanet, 2000);   
    }

    componentWillUnmount() {
        clearInterval(this.interval);
       
    }


    onError = () => {
        this.setState({
            error: true
        });
    }

    onPlanetLoaded = (planet) => {
        this.setState({planet, load: false})
    }

    updatePlanet = () => {
        const id = Math.round(Math.random()*30);
        this.swapi.getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError);
    }

    render() {
        const {planet, load, error} = this.state;
        const errorContent = error ? <ErrorComponent /> : null;
        const loader = load ? <Loader /> : null;
        const content = (!load && !error) ? <PlanetView planet = {planet} /> : null;

        return (
            <div className="RandomPlanet">
                {errorContent}
                {loader}
                {content}
            </div>    
        );

        const PlanetView = (props) => {
            const { id, name, diametr, population, gravity} = props.planet;
        return (
            <React.Fragment>
            <h3>{name}</h3>
            <div className="d-flex planet_block">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg `} alt="planet" />
            <ul className="planet_info_block">
                <li> 
                    <span>diametr</span>
                    <span>{diametr}</span>
                </li>
                <li> 
                    <span>population</span>
                    <span>{population}</span>
                </li> 
                 <li> 
                    <span>gravity</span>
                     <span>{gravity}</span>
                </li>
            </ul>
            </div>
        </div>
        </React.Fragment>
    )
}

}

