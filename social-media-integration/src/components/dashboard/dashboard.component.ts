import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  firstName:string;
  lastName:string;
  photoUrl:string;
  email:string;


  constructor(private router:Router, private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.firstName=localStorage.getItem('firstName')
    this.lastName=localStorage.getItem('lastName')
    this.photoUrl=localStorage.getItem('photoUrl')
    this.email=localStorage.getItem('email')
    
  }
  logout(){
    this.authService.signOut();
    localStorage.clear();
    this.router.navigate(['/signup'])
    
    
  }
  

}
