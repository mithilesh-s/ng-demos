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


@NgModule({
  declarations: [
    HomeComponent,
    PromiseComponent,
    AsyncAwaitComponent,
    FromEventComponent,
    IntervalAndTimerComponent,
    OfAndFromComponent,
    ToArrayComponent
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
