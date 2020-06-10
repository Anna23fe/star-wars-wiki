import React from 'react';

import SwapiService from '../../services/SwapiService';
import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ItemsList from '../ItemsList';
import DetailsInfo from '../DetailsInfo';
import ErrorTest from '../ErrorTest';


export default class App extends React.Component {
    state = {
        isRandomPlanet: true,
        selectedPerson: 3,
    }

    render() {

    const swapi = new SwapiService();
  
    swapi.getAllPeople()
      .then((body) => {
          console.log(body);
      })

      onTogglePlanet = () => {
          this.setState((prevState) => {
              return {isRandomPlanet: !prevState.isRandomPlanet,}
          });
      }

      onPersonSelect = (id) => {
          this.setState({
              selectedPerson: id
          });
        
      }

    return (
        <div className="App">
           <Header />
           {this.state.isRandomPlanet && <RandomPlanet />}
           <button onClick={this.onTogglePlanet}>
               on/off planet</button>
               <ErrorTest/>
           <div className="d-flex justify-content-between">
               <ItemsList onItemClick={this.onPersonSelect} />
               <DetailsInfo personId={this.state.selectedPerson}
               />
           </div>
        </div>
    )
}
}
