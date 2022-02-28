import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { ResponseInterface } from '../Response';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  isLoggedIn=false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 3;
  constructor(private authservice:AuthService,private _snackBar:MatSnackBar){}

  ngOnInit(): void {
      this.authservice.user.subscribe(res=>{
        // this.isLoggedIn=!!res;
        // this.isLoggedIn=!res?false:true;
        if(res)
        {
          this.isLoggedIn=true;
        }
        else{
          this.isLoggedIn=false;
        }
      });
  }

  logout()
  {
    this.authservice.signOut();
    this.openSnackBarLogout();
  }
  openSnackBarLogout() {
    this._snackBar.open('You are successfully Logged out !!', 'OK', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition, duration: this.durationInSeconds * 1000,
  });
}

}
