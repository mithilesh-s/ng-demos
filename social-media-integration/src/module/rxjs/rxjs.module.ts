import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { HomeComponent } from '../components/home/home.component';
import { PromiseComponent } from '../components/promise/promise.component';
import { AsyncAwaitComponent } from '../components/async-await/async-await.component';
import { FromEventComponent } from '../components/from-event/from-event.component';
import { IntervalAndTimerComponent } from '../components/interval-and-timer/interval-and-timer.component';
import { OfAndFromComponent } from '../components/of-and-from/of-and-from.component';
import { ToArrayComponent } from '../components/to-array/to-array.component';
import { SubjectComponent } from '../components/subject/subject.component';
import { Comp1Component } from '../components/comp/comp1/comp1.component';
import { Comp2Component } from '../components/comp/comp2/comp2.component';
import { Comp3Component } from '../components/comp/comp3/comp3.component';
import { ReplaySubjectComponent } from '../components/replay-subject/replay-subject.component';
import { CustomObservableComponent } from '../components/custom-observable/custom-observable.component';
import { MapComponent } from '../components/map/map.component';
import { PluckComponent } from '../components/pluck/pluck.component';


@NgModule({
  declarations: [
    HomeComponent,
    PromiseComponent,
    AsyncAwaitComponent,
    FromEventComponent,
    IntervalAndTimerComponent,
    OfAndFromComponent,
    ToArrayComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplaySubjectComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule { 
  constructor(){
    console.log("this is rxjs module");
    
  }  
}
