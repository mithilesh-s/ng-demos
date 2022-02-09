import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'project-status-page',
  templateUrl: './project-status.component.html',
  styleUrls: ['./project-status.component.css']
})
export class ProjectStatusComponent implements OnInit {

  constructor() { }

@Input() projectStatusPage:any

  ngOnInit() {
    console.log("sfdsfsf")
  }



}
