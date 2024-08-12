import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MiembrosComponent } from './components/miembros/miembros.component';
import { MenuComponent } from './components/compartido/menu/menu.component';
import { DocumentosComponent } from './components/documentos/documentos.component';
import { CertificacionComponent } from './components/certificaciones/certificaciones.component';
import { PagoComponent } from './components/pagos/pagos.component';
import { RenovacionComponent } from './components/renovaciones/renovaciones.component';



@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    MiembrosComponent,
    MenuComponent,
    DocumentosComponent,
    CertificacionComponent,
    PagoComponent,
    RenovacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
