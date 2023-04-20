import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { CatalogoComponent } from './Components/catalogo/catalogo.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { LoginComponent } from './Components/login/login.component';
import { DetalleComponent } from './Components/detalle/detalle.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// módulos para el cliente http y los formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './Pages/menu/menu.component';
import { PosterPipe } from './Pipes/poster.pipe';
import { OverviewPipe } from './Pipes/overview.pipe';
import { ListadoGeneroComponent } from './Components/listado-genero/listado-genero.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogoComponent,
    RegistroComponent,
    LoginComponent,
    DetalleComponent,
    MenuComponent,
    PosterPipe,
    OverviewPipe,
    ListadoGeneroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
