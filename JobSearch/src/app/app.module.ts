import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobSearchComponent } from 'src/components/job-search/job-search.component';
import { BasicInformationComponent } from 'src/components/basic-information/basic-information.component';
import { EducationComponent } from 'src/components/education/education.component';
import { WorkExperienceComponent } from 'src/components/work-experience/work-experience.component';
import { AttachmentComponent } from 'src/components/attachment/attachment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    JobSearchComponent,
    BasicInformationComponent,
    EducationComponent,
    WorkExperienceComponent,
    AttachmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
