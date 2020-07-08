import React from 'react';

import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
// import ErrorTest from '../ErrorTest';
import ErrorComponent from '../ErrorComponent';
import PeoplePage from '../PeoplePage/PeoplePage';
import PlanetPage from '../PlanetPage/PlanetPage';
import SwapiService from '../../services/SwapiService';
import SwapiContext from '../SwapiServiceContext';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import StarshipPage from '../StarshipPage';

export default class App extends React.Component {

    swapi = new SwapiService();

    state = {
        isRandomPlanet: true,
        error: false
    }

    componentDidCatch() {
        this.setState({error: true});
    }

    onTogglePlanet = () => {
        this.setState((prevState) => {
            return{isRandomPlanet: !prevState.isRandomPlanet};
        });
    }

    render() {
        if (this.state.error){
            return <ErrorComponent/>
        }
        return (
            <SwapiContext.Provider value={this.swapi}>
                <Router>
                    <div className="App">
                        <Header />
                        <RandomPlanet />
                        {/* <ErrorTest /> */}
                        <Route path="/" exact>
                            <h3>Hello, my dear friend!</h3>
                        </Route>
                        <Route path="/people">
                            <h3>People</h3>
                            <PeoplePage/>
                        </Route>
                        <Route path="/planets">
                            <h3>Planets</h3>
                            <PlanetPage/>
                        </Route>
                        <Route path="/starships">
                            <h3>Starships</h3>
                            <StarshipPage />
                        </Route>
                    </div>
                </Router>
            </SwapiContext.Provider>
        )  
    }
}