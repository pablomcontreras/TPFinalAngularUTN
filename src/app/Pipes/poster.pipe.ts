import { Pipe, PipeTransform } from '@angular/core';
//Este pipe toma el dato que devuelve el request, que es un path relativo de donde esta el poster, y le agrega el resto de la URL a donde apuntar la imagen
@Pipe({
  name: 'poster',
})
export class PosterPipe implements PipeTransform {
  transform(value: string): string {
    return `https://image.tmdb.org/t/p/w300${value}`;
  }
}
