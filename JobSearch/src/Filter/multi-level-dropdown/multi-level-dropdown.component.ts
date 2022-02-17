import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-level-dropdown',
  templateUrl: './multi-level-dropdown.component.html',
  styleUrls: ['./multi-level-dropdown.component.css']
})
export class MultiLevelDropdownComponent implements OnInit {

  constructor() { }

  ngOnInit() {

   console.log(this.classSubject9)

  }

  @Input() classSubject9:string[];
  @Input() classSubject10:string[];
  @Input() classSubject11:string[];
  @Input() classSubject12:string[];
  @Input() classStandard:number[];
  @Input() noOfNinethClassIndexZeroStudents1:number
  @Input() noOfNinethClassIndexZeroStudentsNames:string[]




}
