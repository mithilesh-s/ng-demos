import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


@Component({
  selector: 'app-tdf-form',
  templateUrl: './tdf-form.component.html',
  styleUrls: ['./tdf-form.component.css']
})
export class TdfFormComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }
  @ViewChild('userForm') userForm!: NgForm;
  invalidField:boolean=false;
  ngOnInit() {
  }

  tdfFormSubmit(value:any){
    if(this.userForm.valid)
    {
       this.invalidField=false;
      console.log(value)
    }
    if(this.userForm.invalid)
    {
      this.invalidField=true;
    }
}
    horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    verticalPosition: MatSnackBarVerticalPosition = 'top';
    durationInSeconds = 3;
    openSnackBar() {
      if(this.userForm.valid)
       {
          this._snackBar.open('Your form is successfully submitted !!', 'OK', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition, duration: this.durationInSeconds * 1000,
    });
  }
}

}
