import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownDataService {

  constructor() { }
  getCountries() {
    return [
      { id: 1, name: 'India' },
      { id: 2, name: 'USA' }
    ]

  }
  getStates() {

    return [
      { id: 1, country_name: "India", name: 'Uttar Pradesh' },
      { id: 2, country_name: "India", name: 'Uttarakhand' },
      { id: 3, country_name: "USA", name: 'Alaska' },
      { id: 4, country_name: "USA", name: 'Albama' },
      { id: 5, country_name: "USA", name: 'California' },
      { id: 6, country_name: "India", name: 'Haryana' },



    ]

  }
  getCities() {

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

