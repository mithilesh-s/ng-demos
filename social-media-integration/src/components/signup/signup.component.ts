
import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { FacebookLoginProvider } from "@abacritt/angularx-social-login";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;
  signUpForm: FormGroup;

  constructor(private authService: SocialAuthService,private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit() {
 
   this.signUpForm=this.formBuilder.group({
    name:['',[Validators.required]],
    email:['',[Validators.required]],
    password:['',[Validators.required]]
   })




    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if(!!this.user){
        localStorage.setItem('firstName', this.user.firstName)
        localStorage.setItem('lastName', this.user.lastName)
        localStorage.setItem('photoUrl', this.user.photoUrl)
        localStorage.setItem('email', this.user.email)
      }
      if(this.loggedIn){
        this.router.navigate(['/dashboard'])
      }
    });

   

  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  submitSignUpForm() {
    if(this.signUpForm.invalid){
      alert("please fill out required field")
    }
    if(this.signUpForm.valid){
      // this.user.firstName=this.signUpForm.value.name;
      // this.user.email=this.signUpForm.value.email;
      const fullName=this.signUpForm.value.name.split(' ');
      console.log(this.signUpForm.value.name);
      localStorage.setItem('firstName', fullName[0])
      if(fullName.length>1){
        localStorage.setItem('lastName', fullName[fullName.length-1])
      }
      localStorage.setItem('email', this.signUpForm.value.email)
      localStorage.setItem('password', this.signUpForm.value.password)
      localStorage.setItem('photoUrl', null)
      this.router.navigate(['/login'])
     
      
    }
  }

  logout(){
    
  }

}
