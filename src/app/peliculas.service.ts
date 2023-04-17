import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  constructor(private http: HttpClient) {}

  getGeneros() {
    return this.http.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=343b1af65aa49d4ebb8e0c3d95e57588&language=es-MX`
    );
  }

  getFeatured() {
    return this.http.get(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=343b1af65aa49d4ebb8e0c3d95e57588&language=es-MX'
    );
  }

  getById(id: string) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=343b1af65aa49d4ebb8e0c3d95e57588&language=es-MX`
    );
  }

  getPopularMovies() {
    return this.http.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=343b1af65aa49d4ebb8e0c3d95e57588&language=es-MX&sort_by=popularity.desc`
    );
  }

  getByGenre(genero: string) {
    return this.http.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=343b1af65aa49d4ebb8e0c3d95e57588&with_genres=${genero}&language=es-MX`
    );
  }

  getNameById(id: string, arr: any) {
    console.log('se llamo a getNameById con esto: ', id, arr);
    console.log('Lenght del array: ', arr.length);

    const parsedId = parseInt(id, 10); // Convertimos el id en un número entero para compararlo

    for (let i = 0; i < arr.length; i++) {
      console.log('Comparando id: ', id, 'con el id ', arr[i].id);
      if (arr[i].id === parsedId) {
        console.log('el id ', id, ' coincide para el genero: ', arr[i].name);
        return arr[i].name;
      }
    }
    return null;
  }
}
