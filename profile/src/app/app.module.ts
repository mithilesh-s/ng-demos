
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from 'src/components/user-profile/user-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from 'src/components/about/about.component';
import { InformationComponent } from 'src/components/information/information.component';
import { SocialMediaComponent } from 'src/components/social-media/social-media.component';
import { ProjectStatusComponent } from 'src/components/project-status/project-status.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { HomeComponent } from 'src/components/home/home.component';
import { UserComponent } from 'src/components/user/user.component';
import { UProfileComponent } from 'src/components/u-profile/u-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    AboutComponent,
    InformationComponent,
    SocialMediaComponent,
    ProjectStatusComponent,
    NavbarComponent,
    HomeComponent,
    UserComponent,
    UProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
