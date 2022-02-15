import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twelve_filter'
})
export class TwelveFilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    return value.filter(function(search:any){
      return search.toLowerCase().indexOf(searchTerm.toLowerCase())>-1;

    });
  }

}
