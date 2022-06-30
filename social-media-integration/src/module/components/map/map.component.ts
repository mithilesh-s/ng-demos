import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription } from 'rxjs';
import { UtilityService } from 'src/services/utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private _utilityService: UtilityService) { }
  mapDataSubscription1: Subscription
  mapDataSubscription2: Subscription

  ngOnInit(): void {
    const mapData = interval(1000);
    this.mapDataSubscription1 = mapData.subscribe(res => {
      this._utilityService.print(res, 'elContainer1')
    })
    this.mapDataSubscription2 = mapData.pipe(map(data => 'Video ' + data)).subscribe(transormeRes => {
      this._utilityService.print(transormeRes, 'elContainer2')
    })

    setTimeout(() => {
      this.mapDataSubscription1.unsubscribe();
    }, 11000)
    setTimeout(() => {
      this.mapDataSubscription2.unsubscribe();
    }, 11000)
  }

}
