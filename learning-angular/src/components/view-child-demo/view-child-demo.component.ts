import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child-demo',
  templateUrl: './view-child-demo.component.html',
  styleUrls: ['./view-child-demo.component.scss']
})
export class ViewChildDemoComponent implements OnInit {
  @ViewChild('card') card!:ElementRef

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit()
  {
    // this.card.nativeElement.style.backgroundColor="green"
    // this.card.nativeElement.classList="card class"
    // this.card.nativeElement.innerHTML="this is my card"
    this.renderer.setStyle(this.card.nativeElement,'backgroundColor','green')
    this.renderer.setStyle(this.card.nativeElement,'color','white')
    this.renderer.addClass(this.card.nativeElement,'my-class')
    this.renderer.setAttribute(this.card.nativeElement,'title','my-title')
  }

}
