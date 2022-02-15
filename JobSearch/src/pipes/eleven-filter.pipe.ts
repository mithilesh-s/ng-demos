import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eleven_filter'
})
export class ElevenFilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    return value.filter(function(search:any){
      return search.toLowerCase().indexOf(searchTerm.toLowerCase())>-1;
      alert("sdfh")
    });
  }
}
