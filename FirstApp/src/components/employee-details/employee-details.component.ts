import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employees:any=[];
  errorMsg:any

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {

    this._employeeService.getEmployees().subscribe(data=>this.employees=data,error=>this.errorMsg=error);          
  }

}
