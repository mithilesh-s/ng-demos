import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  departments=
  [
    {"id":1,"name":"Angular"},
    {"id":2,"name":"React"},
    {"id":3,"name":"Java"},
    {"id":4,"name":"Python"},
  ]

  onClick(department:any)
  {
     this.router.navigate(['/department',department.id])
  }

}
