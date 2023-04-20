import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CatalogoComponent } from './Components/catalogo/catalogo.component';
import { LoginComponent } from './Components/login/login.component';
import { DetalleComponent } from './Components/detalle/detalle.component';
import { ListadoGeneroComponent } from './Components/listado-genero/listado-genero.component';
import { RegistroComponent } from './Components/registro/registro.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'genero/:genero', component: ListadoGeneroComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
