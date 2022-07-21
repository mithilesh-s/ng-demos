import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, first, map, pipe, retry, retryWhen, skip, take, takeLast, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {
  person: any
  fetching:boolean=false;
  status:string='No Data'

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
  }


  fetchData() {
    this.fetching=true;
    this.status="Fetching Data..."
    this.http.get('http://localhost:8000/user').pipe(
      // retry(10),
      retryWhen(err=>err.pipe(
        delay(3000),
        scan((retryCount)=>{
          if(retryCount>=5){
            throw err;
          }
          else{
            retryCount+=1;
            this.status="Retrying #"+retryCount
            return retryCount;
          }
        },0)
      )),
      ).subscribe(res => {
      this.person = res;
      this.fetching=false;
      this.status="Fetched Data"
    },
    err=>{
      this.fetching=false;
      this.status="Problem while Fetching Data"
      console.log(err);
    },
    ()=>{
      console.log('data fetched');
      
    })
  }
  

}
