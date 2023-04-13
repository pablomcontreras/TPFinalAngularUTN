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
}
