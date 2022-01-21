import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  _url="assets/employee.json"

  constructor(private http:HttpClient) { }

 getEmployees():Observable<IEmployee[]>{
  return this.http.get<IEmployee[]>(this._url)
            .pipe(catchError(this.errorHandler));
 }

  errorHandler(error:HttpErrorResponse){
    return throwError(error.message || "server error.");
    
  }

}
