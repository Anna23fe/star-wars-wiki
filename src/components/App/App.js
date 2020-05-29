import React from 'react';

import SwapiService from '../../services/SwapiService';
import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ItemsList from '../ItemsList';
import DetailsInfo from '../DetailsInfo';

const App = () => {

    const swapi = new SwapiService();
  
    swapi.getAllPeople()
      .then((body) => {
          console.log(body);
      });

    return (
        <div className="App">
           <Header />
           <RandomPlanet />
           
           <div className="d-flex justify-content-between">
               <ItemsList />
               <DetailsInfo />
           </div>
        </div>
    )
}

export default App;