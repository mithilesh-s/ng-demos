import { Component, OnInit } from '@angular/core';
import { from, interval, skip, take, toArray } from 'rxjs';
import { UtilityService } from 'src/services/utility.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  constructor(private _utilityService: UtilityService) { }
  user = [
    { name: "mithilesh", designation: 'angular developer' },
    { name: "subham", designation: '.net developer' },
    { name: "Divya", designation: 'react developer' }
  ]
  array1: any
  array2: any
  ngOnInit(): void {

    let source = interval(1000);
    source.pipe(
      skip(1),
      take(5)
    ).subscribe(res => {
      this._utilityService.print(res, 'elContainer1')
    })
    source.pipe(
      skip(1),
      take(5),
      toArray()
    ).subscribe(res => {
      this.array1 = res;
    })

  }

}
