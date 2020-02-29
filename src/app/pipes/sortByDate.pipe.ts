import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sortByDate' })
export class SortByDatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if(value) {
      const sortedValues = value.sort((a, b) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
      );
      return sortedValues;
    }
  }
}
