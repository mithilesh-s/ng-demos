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

  firstName:string=''
  lastName:string=''
  email:string=''
  password:string=''
  dob:string=''
  address1:string=''
  address2:string=''
  country:string=''
  state:string=''
  city:string=''
  pincode:string=''
  
  ngOnInit(): void {



    const dashboardData=JSON.parse(localStorage.getItem('register-form-data') ||"{}")
    

     this.firstName=dashboardData.firstName
     this.lastName=dashboardData.lastName
     this.email=dashboardData.email
     this.password=dashboardData.password
     this.dob=dashboardData.dob
     this.address1=dashboardData.address1
     this.address2=dashboardData.address2
     this.country=dashboardData.country
     this.state=dashboardData.state
     this.city=dashboardData.city
     this.pincode=dashboardData.pincode
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
    this.toasterService.success("Successfully logged out")

  }

  

}
