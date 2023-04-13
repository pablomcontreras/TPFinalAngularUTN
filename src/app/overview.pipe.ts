import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'overview'
})
export class OverviewPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value.slice(0,213)+"...";
  }

}
