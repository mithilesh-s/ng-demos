import { Component, HostListener, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-host-listener-demo',
  templateUrl: './host-listener-demo.component.html',
  styleUrls: ['./host-listener-demo.component.scss']
})
export class HostListenerDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // $(window).scroll(()=>{
    //   console.log("scrolling")
    // })
  }

  @HostListener('window:scroll',['$event ']) myClick()
  {
    console.log("Scrolling...")
  } 

}
