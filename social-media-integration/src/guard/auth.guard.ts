import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  user: any;
  constructor(private authService: SocialAuthService,private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
    if (!!this.user) {
      return true;
    }
    else if (localStorage.getItem('token')=='mytoken') {
      return true;
    }
    else {
      this.router.navigate(['/signup'])
      return false;
      
    }
   
  }
}

// this.authService.authState.subscribe((user)=> {
//   this.user = user;
//   if(!!user){
//     return true;
//   }

// }
// if(!!localStorage.getItem('password')){
// return true;
// }
// return false;
