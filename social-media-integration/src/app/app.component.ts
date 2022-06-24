import { ChangeDetectorRef, Component } from '@angular/core';
import { GoogleSigninService } from 'src/services/google-signin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'social-media-integration';
  user:gapi.auth2.GoogleUser;
  constructor(private googleSignInService:GoogleSigninService, private ref:ChangeDetectorRef){}
  ngOnInit(){
    this.googleSignInService.observable().subscribe(user=>{
      this.user=user;
      this.ref.detectChanges();
    })
  }

  signIn(){
    this.googleSignInService.signIn();
  }
}
