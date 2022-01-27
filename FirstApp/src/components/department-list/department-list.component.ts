import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }
  selectedId:any
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap)=>{ //this will work for going previous and next
      let id=Number(params.get('id'))
      this.selectedId=id;
  })   
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
    //  this.router.navigate(['/departments',department.id])
    this.router.navigate([department.id],{relativeTo:this.activatedRoute})
  }
  isSelected(department:any){
    return department.id===this.selectedId
  }
}
