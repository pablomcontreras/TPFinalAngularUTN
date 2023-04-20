import { Pipe, PipeTransform } from '@angular/core';
//Este pipe corta el string al llegar a los 214 caracteres y le concatena puntos suspensivos "..."
@Pipe({
  name: 'overview',
})
export class OverviewPipe implements PipeTransform {
  transform(value: string): string {
    return value.slice(0, 213) + '...';
  }
}
