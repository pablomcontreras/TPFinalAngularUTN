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
  peliculasDelGenero: any;
  listadoGeneros: any;
  titulo: any;
  constructor(
    private route: ActivatedRoute,
    private peliculasService: PeliculasService
  ) {
    peliculasService.getGeneros().subscribe({
      next: (data: any) => {
        this.listadoGeneros = data.genres;
        this.titulo = peliculasService.getNameById(this.genero.genero, this.listadoGeneros)
        console.log("se llama a peliculas service con :", this.genero.genero, this.listadoGeneros)
        console.log("Titulo tiene:", this.titulo)
      },
      error: (e) => {
        console.log('Error: ', e);
      },
    });
  }

  ngOnInit() {
    this.genero = this.route.snapshot.params;
    this.route.params.subscribe((params) => {
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
