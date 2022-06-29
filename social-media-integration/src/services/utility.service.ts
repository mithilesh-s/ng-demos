import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  print(value, containerId) {
    let el = document.createElement('li');
    el.innerHTML = value
    document.getElementById(containerId).appendChild(el);
  }

}
