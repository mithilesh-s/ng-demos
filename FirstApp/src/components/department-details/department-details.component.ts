import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl:'/app-department-details.component.html',
  styleUrls:['/app-department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private router:Router) { }
  urlId:any
  public selectedId:any
  ngOnInit(): void {
    // let id=this.activatedRoute.snapshot.paramMap.get('id') this will not work for going previous and next
    this.activatedRoute.paramMap.subscribe((params: ParamMap)=>{ //this will work for going previous and next
      let id=Number(params.get('id'))
      this.urlId=id;
    })
   
   
  }
  goPrevious()
  {
     let previousId=this.urlId-1;
    //  this.router.navigate(['/show-department',previousId])
     this.router.navigate([previousId],{relativeTo:this.activatedRoute})
    
  }
  goNext()
  {
    let nextId=this.urlId+1;
    // this.router.navigate(['/show-department', nextId])
    this.router.navigate([nextId],{relativeTo:this.activatedRoute})
  }

  goDepartment(){
    let selectedId=this.urlId? this.urlId:null
    // this.router.navigate(['show-department',selectedId])
    this.router.navigate(['../'],{relativeTo:this.activatedRoute})
  }

}


