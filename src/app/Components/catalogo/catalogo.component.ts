import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../Services/peliculas.service';

//Este componente renderiza un listado con elementos basado en los generos disponibles en la API
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent {
  generos: any;

  constructor(private peliculasService: PeliculasService) {
    const response = peliculasService.getGeneros().subscribe({
      next: (data: any) => {
        this.generos = data.genres;
        //console.log(this.generos);
      },
      error: (e) => {
        console.log('Error: ', e);
      },
    });
  }
}
