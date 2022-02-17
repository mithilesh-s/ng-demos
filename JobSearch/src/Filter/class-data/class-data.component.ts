import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-data',
  templateUrl: './class-data.component.html',
  styleUrls: ['./class-data.component.css']
})
export class ClassDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  @Input() classSubject:any
  @Input() classStandard:number
 

  subjectName:string=""

}
