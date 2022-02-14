import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'education-page',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  @Input() education:FormGroup

  get school(){
    return this.education.get('school');
  }
  get program(){
    return this.education.get('program');
  }
  get educationLevel(){
    return this.education.get('educationLevel');
  }
  get educationStatus(){
    return this.education.get('educationStatus');
  }
  get graduDate(){
    return this.education.get('graduDate');
  }

  constructor() { }

  ngOnInit() {
  }

}
