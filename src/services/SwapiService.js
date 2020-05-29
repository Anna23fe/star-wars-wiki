export default class SwapiService{

    _baseUrl = 'https://swapi.dev/api';
  
    async getData(url) {
        const response = await fetch(`${this._baseUrl}${url}`);
      
        if(!response.ok){
          throw new Error(`we have a problem with fetch ${url}`);
        }
  
        return await response.json();
      }
  
      async getAllPeople() {
          const response = await this.getData('/people/');
          return response.results;
      }    
  
      getPerson(id) {
          return this.getData(`/people/${id}/`);
      }
      getPlanet(id) {
        return this.getData(`/planets/${id}/`);
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