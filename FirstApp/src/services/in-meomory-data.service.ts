import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from 'src/components/task2/hero'; 

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mithilesh' },
      { id: 12, name: 'Subham' },
      { id: 13, name: 'Mahaveer' },
      { id: 14, name: 'Tushar' },
      { id: 15, name: 'Ujjval' },
      { id: 16, name: 'Divya' },
      { id: 17, name: 'Ritesh' },
      { id: 18, name: 'Ashirvad' },
      { id: 19, name: 'Kunal' },
      { id: 20, name: 'Priyanshu' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}