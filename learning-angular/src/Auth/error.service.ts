import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  errorMessages={
    UNKNOWN:'An unknown error occured.',
    EMAIL_EXISTS:'This email is already exist.',
    OPERATION_NOT_ALLOWED:'Password sign-in is disabled for this project.',
    TOO_MANY_ATTEMPTS_TRY_LATER:'We have blocked all the request.',
    EMAIL_NOT_FOUND:'There is no user coresponding to this email.',
    INVALID_PASSWORD:'Password is invalid.',
    USER_DISABLED:'Your account has been disabled by the administrator.'
  }
}
