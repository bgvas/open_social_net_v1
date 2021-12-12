import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusGreek'
})
export class StatusGreekPipe implements PipeTransform {

  transform(value: unknown): unknown {
    if(value === true || value === 1) {
      return 'ενεργός';
    } else {
      return 'ανενεργός';
    }
  }
}
