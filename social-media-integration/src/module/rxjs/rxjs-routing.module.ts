import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncAwaitComponent } from '../components/async-await/async-await.component';
import { CustomObservableComponent } from '../components/custom-observable/custom-observable.component';
import { FromEventComponent } from '../components/from-event/from-event.component';
import { HomeComponent } from '../components/home/home.component';
import { IntervalAndTimerComponent } from '../components/interval-and-timer/interval-and-timer.component';
import { MapComponent } from '../components/map/map.component';
import { OfAndFromComponent } from '../components/of-and-from/of-and-from.component';
import { PluckComponent } from '../components/pluck/pluck.component';
import { PromiseComponent } from '../components/promise/promise.component';
import { ReplaySubjectComponent } from '../components/replay-subject/replay-subject.component';
import { SubjectComponent } from '../components/subject/subject.component';
import { ToArrayComponent } from '../components/to-array/to-array.component';

const routes: Routes = [
  {path:'',component:HomeComponent,children:[
    {path:'promise',component:PromiseComponent},
    {path:'async-await',component:AsyncAwaitComponent},
    {path:'from-event',component:FromEventComponent},
    {path:'interval-and-timer',component:IntervalAndTimerComponent},
    {path:'of-and-from',component:OfAndFromComponent},
    {path:'to-array',component:ToArrayComponent},
    {path:'subject',component:SubjectComponent},
    {path:'replay-subject',component:ReplaySubjectComponent},
    {path:'custom-observable',component:CustomObservableComponent},
    {path:'map',component:MapComponent},
    {path:'pluck',component:PluckComponent},
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
