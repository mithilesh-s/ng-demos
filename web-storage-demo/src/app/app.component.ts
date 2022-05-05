import { Component, HostListener } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-storage-demo';
  data: any
  data1: any
  cookieValue: any
  cookieValue1: any
  constructor(private cookieService: CookieService) {

  }
  ngOnInit() {
    let company = {
      name: "code store",
      tech: ["angular", ".net", "react", "react-native", "devops"],
      employee: 70,
      location: 'noida',
      time: new Date().getMinutes()
    }
    let company1 = {
      name: "code store",
      tech: ["angular", ".net", "react", "react-native", "devops"],
      employee: 70,
      location: 'noida',
      time: new Date().getMinutes()
    }
    const person = {
      firstName: "John",
      lastName: "Doe",
      age: 50,
      eyeColor: "blue"
    };
    const dateNow = new Date();
    dateNow.setMinutes(dateNow.getMinutes() + 1);
    console.log(dateNow)
    this.cookieService.set('Test', JSON.stringify(company),0.0007);
    // this.cookieService.set('Test1', JSON.stringify(company1),{expires:0.007});
    // this.cookieService.set('person', JSON.stringify(person),{expires:0.007});
    // this.cookieService.set('Test1', JSON.stringify(company),{expires:0.007});
    // this.cookieService.set('Test11', JSON.stringify(company1),{expires:0.007});
    // this.cookieService.set('person1', JSON.stringify(person),{expires:0.007});
    // this.cookieService.set('Test11', JSON.stringify(company),{expires:0.007});
    // this.cookieService.set('Test1111', JSON.stringify(company1),{expires:0.007});
    // this.cookieService.set('person111', JSON.stringify(person),{expires:0.007});
    // this.cookieService.set('Test111111', JSON.stringify(company),{expires:0.007});
    // this.cookieService.set('Test111111', JSON.stringify(company1),{expires:0.007});
    // this.cookieService.set('person111111', JSON.stringify(person),{expires:0.007});
    // this.cookieService.set('Test11111111', JSON.stringify(company),{expires:0.007});
    // this.cookieService.set('Test11111111111111', JSON.stringify(company1),{expires:0.007});
    // this.cookieService.set('person222222222222', JSON.stringify(person),{expires:0.007});
    // this.cookieService.set('Test133333333333333', JSON.stringify(company),{expires:0.007});
    // this.cookieService.set('Test11444444444444', JSON.stringify(company1),{expires:0.007});
    // this.cookieService.set('person14444444444444', JSON.stringify(person),{expires:0.007});
    // this.cookieService.set('Test4444444444444', JSON.stringify(company),{expires:0.007});
    // this.cookieService.set('Test1444', JSON.stringify(company1),{expires:0.007});
    // this.cookieService.set('person44444444444444444444444', JSON.stringify(person),{expires:0.007});
    // this.cookieService.set('Test1444444444444', JSON.stringify(company),{expires:0.007});
    // this.cookieService.set('Test115555555555555', JSON.stringify(company1),{expires:0.007});
    // this.cookieService.set('person166666666666666666666', JSON.stringify(person),{expires:0.007});
    // this.cookieService.set('Test77777777777777777', JSON.stringify(company),{expires:0.007});
    // this.cookieService.set('Test1888888888888888888', JSON.stringify(company1),{expires:0.007});
    // this.cookieService.set('person999999999999', JSON.stringify(person),{expires:0.007});
    // this.cookieService.set('Test10000000000', JSON.stringify(company),{expires:0.007});
    // this.cookieService.set('Test110', JSON.stringify(company1),{expires:0.007});
    // this.cookieService.set('person10', JSON.stringify(person),{expires:0.007});
    // this.cookieService.set('Test00000000000000000000000000', JSON.stringify(company),{expires:0.007});
    // this.cookieService.set('Test10000000000000', JSON.stringify(company1),{expires:0.007});
    // this.cookieService.set('person0000000000', JSON.stringify(person),{expires:0.007});
    // this.cookieService.set('Test100', JSON.stringify(company),{expires:0.007});
    // this.cookieService.set('Test11000', JSON.stringify(company1),{expires:0.007});
    // this.cookieService.set('person1', JSON.stringify(person),{expires:0.007});

    this.cookieValue = this.cookieService.get('Test');
    // this.cookieValue1=JSON.parse(this.cookieService.get('Test1') ||" ")



    localStorage.setItem("myCompany", JSON.stringify(company))
    this.data = JSON.parse(localStorage.getItem("myCompany") || " ")
    console.log(this.data);


  }








}
