import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  
     <img src="/assets/404not found.jpg" alt="pic"/>

  `,
  styles: [
   'img{margin-top:50px;display: block;margin-left: auto;margin-right: auto;width: 50%;}'
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
