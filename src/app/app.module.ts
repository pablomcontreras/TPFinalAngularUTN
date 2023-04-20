//Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { CatalogoComponent } from './Components/catalogo/catalogo.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { LoginComponent } from './Pages/login/login.component';
import { DetalleComponent } from './Components/detalle/detalle.component';
import { ListadoGeneroComponent } from './Components/listado-genero/listado-genero.component';
import { MenuComponent } from './Pages/menu/menu.component';

//Pipes que cree
import { PosterPipe } from './Pipes/poster.pipe';
import { OverviewPipe } from './Pipes/overview.pipe';

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
