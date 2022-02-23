import { DialogService } from './../../services/dialog.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  {
  constructor(private _snackBar:MatSnackBar,private dialogService:DialogService){}
  confirmMessage:string="are you sure to delete this row"
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 3;
  firstName1!:string;
  lastName1!:string;


   userDetails=[

    {firstName:"mithilesh",lastName:"shah",isEdit:false},
    {firstName:"subham",lastName:"kumar",isEdit:false},
    {firstName:"Mahaveer",lastName:"Sharma",isEdit:false},
    {firstName:"Tushar",lastName:"Gope",isEdit:false},
    {firstName:"Ujjawal",lastName:"Goyal",isEdit:false},
    {firstName:"Kunal",lastName:"Gupta",isEdit:false},
    {firstName:"Priyanshu",lastName:"Raj",isEdit:false},
    {firstName:"Divya",lastName:"Raheja",isEdit:false},
    {firstName:"Ashirvaad",lastName:"Sarangi",isEdit:false},
    {firstName:"Ritesh",lastName:"Kumar",isEdit:false}

  ];

 addRow(firstName:string,lastName:string,isEdit:boolean){
    if(firstName.trim().length>0 && lastName.trim().length>0){
           this.userDetails.unshift({firstName,lastName,isEdit})
           this.openSnackBarSuccess()
    }
    else{
      this.openSnackBarFail()
    }
 }

 deleteRow(index:number){
    this.dialogService.openConfirmDialog(this.confirmMessage).afterClosed().subscribe(res=>{
      if(res)
      {
          this.userDetails.splice(index,1);
          this.openSnackBarDelete()
      }
    })

 }

  editRow(index:number)
  {
    this.userDetails[index].isEdit=true;
    this.firstName1=this.userDetails[index].firstName;
    this.lastName1=this.userDetails[index].lastName;
  }

  saveRow(index:number)
  {
      this.userDetails[index].isEdit=false;
      if(this.userDetails[index].firstName !==this.firstName1 || this.userDetails[index].lastName !==this.lastName1)
      {
        this.openSnackBarSave()
      }
  }
  cancelRow(index:number)
  {
    this.userDetails[index].isEdit=false;
    this.userDetails[index].firstName=this.firstName1;
    this.userDetails[index].lastName=this.lastName1;

  }

  openSnackBarSuccess() {
    this._snackBar.open('One row data is successfully added !!', 'OK', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition, duration: this.durationInSeconds * 1000,
  });

}

  openSnackBarFail() {
    this._snackBar.open('You can not add the row with empty data !!', 'OK', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition, duration: this.durationInSeconds * 1000,
  });

}

openSnackBarDelete() {
    this._snackBar.open('Your row data is successfully deleted !!', 'OK', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition, duration: this.durationInSeconds * 1000,
  });

 }
 openSnackBarSave() {
    this._snackBar.open('Your row data is successfully updated !!', 'OK', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition, duration: this.durationInSeconds * 1000,
  });

}



}
