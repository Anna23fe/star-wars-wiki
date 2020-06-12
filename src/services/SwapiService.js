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
          return response.results.map(this.transformPerson);
      }    

        getAllPlanet = async () => {
          const response = await this.getData('/planets/');
          return response.results.map(this.transformPlanet);
    }   
  
      async getPerson(id) {
        const person = await this.getData(`/people/${id}/`);
        return this.transformPerson(person);
      }
      async getPlanet(id) {
        const planet = await this.getData(`/planets/${id}/`);
        return this.transformPlanet(planet);
     }
     
     getId(item) {
       return item.url.match(/\/([0-9]*)\/$/)[1];
     }

     transformPerson = (person) => {
      return {
        id: this.getId(person),
        name: person.name,
        gender: person.gender,
        mass: person.mass,
        birthDate: person.birth_year,
      }
     }

     transformPlanet = (planet) => {
       return {
         id: this.getId(planet),
         name: planet.name,
         diameter: planet.diameter,
         population: planet.population,
         gravity: planet.gravity,
       }
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