import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'social-media-page',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  constructor() { }

  @Input() socialMediaPage:any

  ngOnInit() {
  }

}
