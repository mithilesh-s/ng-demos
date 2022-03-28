import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  logout()
  {
    this._authService.logout();
  }
  changePassword()
  {
      this.router.navigate(['/change-password'])
  }

}
