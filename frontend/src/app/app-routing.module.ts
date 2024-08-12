import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { MiembrosComponent } from './components/miembros/miembros.component';
import { MenuComponent } from './components/compartido/menu/menu.component';
import { DocumentosComponent } from './components/documentos/documentos.component';{}
import { CertificacionComponent } from './components/certificaciones/certificaciones.component';
import { PagoComponent } from './components/pagos/pagos.component';
import { RenovacionComponent } from './components/renovaciones/renovaciones.component';
const routes: Routes = [
  { path: 'usuario', component: UsuarioComponent },
  { path: 'miembros', component: MiembrosComponent },
  { path: 'documentos', component: DocumentosComponent },
  { path: 'certificaciones', component: CertificacionComponent },
  { path: 'pagos', component: PagoComponent },
  { path: 'renovaciones', component: RenovacionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
