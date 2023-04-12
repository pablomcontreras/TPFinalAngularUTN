import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `https://image.tmdb.org/t/p/w154${value}`;
  }

}
