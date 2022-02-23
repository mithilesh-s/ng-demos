import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child-demo',
  templateUrl: './view-child-demo.component.html',
  styleUrls: ['./view-child-demo.component.scss']
})
export class ViewChildDemoComponent implements OnInit {
  @ViewChild('card') card!:ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit()
  {
    this.card.nativeElement.style.backgroundColor="green"
    this.card.nativeElement.classList="card class"
    this.card.nativeElement.innerHTML="this is my card"
  }

}
