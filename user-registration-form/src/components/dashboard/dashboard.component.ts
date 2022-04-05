import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private toasterService:ToastrService) { }

  firstName:any=''
  lastName:any=''
  email:any=''
  password:any=''
  dob:any=''
  address1:any=''
  address2:any=''
  country:any=''
  state:any=''
  city:any=''
  pincode:any=''
  
  ngOnInit(): void {

     this.firstName=localStorage.getItem('firstName')
     this.lastName=localStorage.getItem('lastName')
     this.email=localStorage.getItem('email')
     this.password=localStorage.getItem('password')
     this.dob=localStorage.getItem('dob')
     this.address1=localStorage.getItem('address1')
     this.address2=localStorage.getItem('address2')
     this.country=localStorage.getItem('country')
     this.state=localStorage.getItem('state')
     this.city=localStorage.getItem('city')
     this.pincode=localStorage.getItem('pincode')
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
    this.toasterService.success("Successfully logged out")

  }

  

}
