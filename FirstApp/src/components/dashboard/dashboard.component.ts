import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data:any;

 constructor(private router:Router,private route:ActivatedRoute){}

 ngOnInit(): void {
     this.route.queryParams.subscribe((params)=>{
            console.log(params)
            this.data=JSON.parse(params['data'])
     })
 }
}
