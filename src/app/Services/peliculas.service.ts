import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  constructor(private http: HttpClient) {}

  // Configuración general
  baseUrl: string = 'https://api.themoviedb.org/3/'; //endpointBase
  apiKey: string = '343b1af65aa49d4ebb8e0c3d95e57588'; // apikey
  language: string = 'es-MX'; // idioma

  //Devuelve un listado de generos disponibles
  getGeneros() {
    return this.http.get(
      `${this.baseUrl}genre/movie/list?api_key=${this.apiKey}&language=${this.language}`
    );
  }
  //Devuelve las tendencias de la semana
  getFeatured() {
    return this.http.get(
      `${this.baseUrl}trending/movie/week?api_key=${this.apiKey}&language=${this.language}`
    );
  }
  //Devuelve detalle por id de pelicula
  getById(id: string) {
    return this.http.get(
      `${this.baseUrl}movie/${id}?api_key=${this.apiKey}&language=${this.language}`
    );
  }
  //Devuelve las peliculas mas populares al momento de la consulta
  getPopularMovies() {
    return this.http.get(
      `${this.baseUrl}discover/movie?api_key=${this.apiKey}&language=${this.language}&sort_by=popularity.desc`
    );
  }
  //Busqueda por genero (id del genero)
  getByGenre(genero: string) {
    return this.http.get(
      `${this.baseUrl}discover/movie?api_key=${this.apiKey}&with_genres=${genero}&language=${this.language}X`
    );
  }
  //Esta función extrae el ID del listado de generos y devuelve el nombre de dicho genero.
  getNameById(id: string, arr: any) {
    const parsedId = parseInt(id, 10); // Convertimos el id en un número entero para compararlo
    for (let i = 0; i < arr.length; i++) {
      //console.log('Comparando id: ', id, 'con el id ', arr[i].id);
      if (arr[i].id === parsedId) {
        //console.log('el id ', id, ' coincide para el genero: ', arr[i].name);
        return arr[i].name;
      }
    }
    return null;
  }
}
