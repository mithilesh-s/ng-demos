import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'information-page',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  constructor() { }

  @Input() informationPage:any

  ngOnInit() {
  }

}
