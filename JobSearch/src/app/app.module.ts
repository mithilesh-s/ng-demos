import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { NavComponent } from 'src/Filter/nav/nav.component';
import { ClassesComponent } from 'src/Filter/classes/classes.component';
import { FilterPipe } from 'src/pipes/nineth-filter.pipe';
import { FormsModule } from '@angular/forms';
import { TenthFilterPipe } from 'src/pipes/tenth-filter.pipe';
import { ElevenFilterPipe } from 'src/pipes/eleven-filter.pipe';
import { TwelveFilterPipe } from 'src/pipes/twelve-filter.pipe';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    JobSearchComponent,
    BasicInformationComponent,
    EducationComponent,
    WorkExperienceComponent,
    AttachmentComponent,
    NavComponent,
    ClassesComponent,
    FilterPipe,
    TenthFilterPipe,
    ElevenFilterPipe,
    TwelveFilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
