import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private authService:AuthService,private route:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    // here we are checking use if logged in or not.If not logged in the navigate to login page and if logged in go to dashboard.
    if(!this.authService.isLoggedIn()){
      this.route.navigate(['/login']);
    }
    return this.authService.isLoggedIn();
  }
  
}
