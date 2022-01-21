import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl:'./navbar.component.html', 
  styleUrls:['./navbar.component.html']
})
export class NavbarComponent implements OnInit {
  data:any;

  constructor(private router:Router,private route:ActivatedRoute){}
 
  ngOnInit(): void {
      this.route.queryParams.subscribe((params)=>{
             console.log(params)
             this.data=JSON.parse(params['data'])
      })
  }

}
