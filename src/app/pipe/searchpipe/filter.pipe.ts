import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,args?: any): any {  
    if(!args) return value;
    console.log(args);
    console.log(value);
    return value.filter((word:any)=>{
      console.log(word);
      return word.title.toLowerCase().includes(args) | word.description.toLowerCase().includes(args);
    })
  }

}
