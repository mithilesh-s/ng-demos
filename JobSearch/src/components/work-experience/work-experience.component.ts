import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'work-experience-page',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  constructor() { }

  @Input() workExperience:FormGroup

  ngOnInit() {
  }

  // get employer(){
  //   return this.workExperience.get('employer');
  // }

}
