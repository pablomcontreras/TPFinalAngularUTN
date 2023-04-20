import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PeliculasService } from '../../Services/peliculas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  id_peli: any;
  pelicula: any = { } ;

  constructor(
    private rutaActiva: ActivatedRoute,
    private peliculasService: PeliculasService
  ) { }
  
  verIMDB() {
      window.open(`https://www.imdb.com/title/${this.pelicula.imdb_id}`, '_blank');
}
  ngOnInit() {
    this.id_peli = this.rutaActiva.snapshot.params;
    this.rutaActiva.params.subscribe((params: Params) => {
      this.id_peli = params;
    });
    this.peliculasService.getById(this.id_peli.id).subscribe({
      next: (data: any) => {
        this.pelicula = data;
      },
      error: (e) => {
      },
    });
  }
}
