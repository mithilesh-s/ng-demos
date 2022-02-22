import { ConfirmationDialogComponent } from 'src/components/confirmation-dialog/confirmation-dialog.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

constructor(private dialog:MatDialog) { }

openConfirmDialog(confirmMessage:string){
  return this.dialog.open(ConfirmationDialogComponent,{
     width: '370px',
     panelClass: 'confirm-dialog-container',
     disableClose: true,
     position: { top: "10px" },
     data :{
       message : confirmMessage
     }
   });
 }

}
