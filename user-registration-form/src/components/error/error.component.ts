import { Component, Host, Input, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  @Input('controlName') controlName!: string;
  @Input('error') error!: string
  @Input('control') control:any
  @Input('isInvalidRegisterForm') isInvalidRegisterForm!:boolean
  @Input('conditonalError') conditonalError:any
  
  // visible: boolean = false;

  constructor(@Optional() @Host() public form: FormGroupDirective) { }

  ngOnInit() {
    if (this.form) {
      this.control = this.form.form.get(this.controlName) as FormControl
    }
  }

}
