import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'about-page',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  @Input() aboutPage:any

  ngOnInit() {
  }

}
