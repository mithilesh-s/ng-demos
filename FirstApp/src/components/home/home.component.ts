import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  data:any;

 constructor(private router:Router,private route:ActivatedRoute){}

 ngOnInit(): void {
     this.route.queryParams.subscribe((params)=>{
            console.log(params)
            this.data=JSON.parse(params['data'])
     })
 }

}
