export default class SwapiService{

    _baseUrl = 'https://swapi.dev/api';
  
    async getData(url) {
      const response = await fetch(`${this._baseUrl}${url}`);
      
      if(!response.ok){
          throw new Error(`we have a problem with fetch ${url}`);
      }
  
      return await response.json();
    }
  
    getAllPeople = async () => {
      const response = await this.getData('/people/');
      return response.results.map(this.transormPerson);
    }    

    getAllPlanets = async () => {
      const response = await this.getData('/planets/');
      return response.results.map(this.transormPlanet);
    }  
    
    getAllStarships = async () => {
      const response = await this.getData('/starships/');
      return response.results.map((this.transformStarship));
    }    
  
    getPerson = async (id) => {
      const person = await this.getData(`/people/${id}/`);
      return this.transormPerson(person);
    }

    getPlanet = async (id) => {
      const planet = await this.getData(`/planets/${id}/`);
      return this.transormPlanet(planet);
    }

    getStarship = async (id) => {
      const starship = await this.getData(`/starships/${id}/`);
      return this.transformStarship(starship);

    }    

    getId(item) {
      return item.url.match(/\/([0-9]*)\/$/)[1];
    };

    transormPlanet = (planet) => {
      return {
        id: this.getId(planet),
        name: planet.name,
        diameter: planet.diameter,
        population: planet.population,
        gravity: planet.gravity
      }
    }

    transormPerson = (person) => {
      return {
        id: this.getId(person),
        name: person.name,
        gender: person.gender,
        mass: person.mass,
        birthDate: person.birth_year
      }
    }

    transformStarship = (starship) => {
      return (
          {
              id: this.getId(starship),
              name: starship.name,
              model: starship.model,
              length: starship.length,
              passengers: starship.passengers,
              starshipClass: starship.starship_class
          }
      );
    }
    
  }

  
  
  // fetch('https://swapi.dev/api/people/5/')
  // .then((res) => {
  //   return res.json();
  // })
  // .then((body) => {
  //   console.log(body);
  // });
  
  // const getData = async(url) => {
  //     const response = await fetch(url);
  
  //     if(!response.ok){
  //       throw new Error('we have a problem');
  //     }
  //     const result = await response.json();
  //     return result;
  //   }
  
  //   getData('https://swapi.dev/api/people/4/')
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });