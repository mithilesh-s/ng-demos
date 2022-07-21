import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor() { }
  data1:any
  data2:any
  data3:any

  users=[
    {id:1,name:"mithilesh",gender:'male'},
    {id:2,name:"subham",gender:'male'},
    {id:3,name:"divya",gender:'female'},
    {id:4,name:"priyanshu",gender:'male'},  
    {id:5,name:"ashirvad",gender:'male'},
    {id:6,name:"reena",gender:'female'},
    {id:7,name:"seema",gender:'female'},
    {id:8,name:"rakhi",gender:'female'},
    {id:9,name:"sakshi",gender:'female'},
    {id:10,name:"shanti",gender:'female'},
  ]

  ngOnInit(): void {
    from(this.users).pipe(filter(data=>data.name.length>5),toArray(),).subscribe(res=>{
      this.data1=res;
    })
    from(this.users).pipe(filter(data=>data.gender=='female'),toArray(),).subscribe(res=>{
      this.data2=res;
    })
    from(this.users).pipe(filter(data=>data.id<=6),toArray(),).subscribe(res=>{
      this.data3=res;
    })
  }

}
