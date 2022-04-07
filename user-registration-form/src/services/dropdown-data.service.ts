import { Injectable } from '@angular/core';
import { City, Country, State } from 'src/interfaces/DropdownDataInterface';

@Injectable({
  providedIn: 'root'
})
export class DropdownDataService {

  constructor() { }
  getCountries():Country {
    return [
      { id: 1, name: 'India' },
      { id: 2, name: 'USA' }
    ]

  }
  getStates():State {

    return [
      { id: 1, country_name: "India", name: 'Uttar Pradesh' },
      { id: 2, country_name: "India", name: 'Uttarakhand' },
      { id: 3, country_name: "USA", name: 'Alaska' },
      { id: 4, country_name: "USA", name: 'Albama' },
      { id: 5, country_name: "USA", name: 'California' },
      { id: 6, country_name: "India", name: 'Haryana' },



    ]

  }
  getCities():City {

    return [
      {id:1,state_name:'Uttar Pradesh', country_name:'India',name:'Noida'},
      {id:2,state_name:'Uttar Pradesh', country_name:'India',name:'Lucknow'},
      {id:3,state_name:'Uttar Pradesh', country_name:'India',name:'Meerut'},
      {id:4,state_name:'Uttarakhand', country_name:'India',name:'Roorkee'},
      {id:5,state_name:'Uttarakhand', country_name:'India',name:'Dehradun'},
      {id:6,state_name:'Haryana', country_name:'India',name:'Gurgaon'},
      {id:7,state_name:'California', country_name: "USA",name:'San Diega'},
      {id:8,state_name:'California', country_name: "USA",name:'Los Angeles'},
      {id:9,state_name:'Alaska', country_name: "USA",name:'Anchorage'},
      {id:10,state_name:'Alaska', country_name: "USA",name:'Badger'},
      {id:11,state_name:'Albama', country_name: "USA",name:'Birhingham'},
      {id:12,state_name:'Albama', country_name: "USA",name:'Auburn'}



    ]

  }

}

