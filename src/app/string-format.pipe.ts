import { TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringFormat'
})
export class StringFormatPipe implements PipeTransform {

  constructor(private titelcasePipe: TitleCasePipe) {

  }

  //Pipe to transform boolean into string or display No Data Available conditionally
  transform(value: any, ...args: unknown[]): string {
    if (value) {
      return this.titelcasePipe.transform(String(value));
    }
    return 'No Data Available';
  }

}
