import { Component, OnInit } from '@angular/core';
// import * as data from '../assets/data.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'learning-angular';

  ngOnInit(): void {
    // const expiresIn:string="3600";
    // console.log(new Date().getTime()+3600*1000)
    // console.log(data.name)


  }
}
