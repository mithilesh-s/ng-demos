import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  images = [944, 1011, 984, 1055, 194, 368].map(
    (n) => `https://picsum.photos/id/${n}/900/500`
  );

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
}
