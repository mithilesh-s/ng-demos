import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-list',
  templateUrl: './tech-list.component.html',
  styleUrls: ['./tech-list.component.scss']
})
export class TechListComponent implements OnInit {

  constructor() { }
  techList=[
    {tabName:'Promise',route:'promise'},
    {tabName:'Async/Await',route:'async-await'},
    {tabName:'From Event',route:'from-event'},
    {tabName:'Interval And Timer',route:'interval-and-timer'},
    {tabName:'Of And From',route:'of-and-from'},
    {tabName:'Subject',route:'subject'},
    {tabName:'Replay Subject',route:'replay-subject'},
    {tabName:'Custom Observable',route:'custom-observable'},
    {tabName:'Map',route:'map'},
    {tabName:'Pluck',route:'pluck'},
    {tabName:'Filter',route:'filter'},
    {tabName:'Tap',route:'tap'},
    {tabName:'Take',route:'take'},
    {tabName:'Retry',route:'retry'},
    {tabName:'Debounce Time and Distinct Untill Changed',route:'debounce-time'},
    ]

  ngOnInit(): void {
  }

}
