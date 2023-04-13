import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  tendencias: any[] = [];

  constructor(private peliculasService: PeliculasService) {
    const response = peliculasService.getFeatured().subscribe({
      next: (data: any) => {
        this.tendencias = data.results.slice(0, 9);
        console.log(this.tendencias);
      },
      error: (e) => {
        console.log('Error: ', e);
      },
    });
  }
}
