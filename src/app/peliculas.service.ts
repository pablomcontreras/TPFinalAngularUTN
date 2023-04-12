import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http:HttpClient) { }

  getFeatured() {

    return this.http.get(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=343b1af65aa49d4ebb8e0c3d95e57588&language=es'
    );
  }
}
