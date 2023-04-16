import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-listado-genero',
  templateUrl: './listado-genero.component.html',
  styleUrls: ['./listado-genero.component.css'],
})
export class ListadoGeneroComponent implements OnInit {

  genero: any;
  peliculasDelGenero: any
  

  constructor(
    private rutaActiva: ActivatedRoute,
    private peliculasService: PeliculasService
  ) {}

  ngOnInit() {
    this.genero = this.rutaActiva.snapshot.params;
    console.log(this.genero.genero)
    this.rutaActiva.params.subscribe((params) => {
      this.genero = params;
    });
    this.peliculasService.getByGenre(this.genero.genero).subscribe({
      next: (data: any) => {
        this.peliculasDelGenero = data.results;
      },
      error: (e) => {},
    });
  }
}
