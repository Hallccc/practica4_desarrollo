import { Component, OnInit } from '@angular/core';
import { miembro } from '../../models/miembros';
import { MiembrosService } from '../../service/miembros.service';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.component.html',
  styleUrl: './miembros.component.css'
})
export class MiembrosComponent implements OnInit{
  miembros:miembro[] = [];
  miembro:miembro ={
    id_miembro:0,
    dni:'',
    nombres:'',
    apellidos:'',
    fecha_nacimiento:'',
    direccion:'',
    email:'',
    telefono:'',
    universidad:'',
    titulo:'',
    fecha_graduacion:'',
    foto_url:'',
    estado :'',
    fecha_registro:'',
  }
  constructor(private miembrosService:MiembrosService){

  }
  ngOnInit(): void {
    this.getMiembros();
  }
  getMiembros():void{
    this.miembrosService.getMiembros().subscribe(
      miembros => {this.miembros = miembros}
    )
  }

  addMiembros(): void {
    this.miembrosService.addMiembros(this.miembro).subscribe(() => {
      this.getMiembros();  // Recargar la lista después de agregar
    });
  }
  
  updateMiembros(): void {
    this.miembrosService.updateMiembros(this.miembro.id_miembro, this.miembro).subscribe(() => {
      this.getMiembros();  // Recargar la lista después de actualizar
    });
  }
  
  deleteMiembros(): void {
    this.miembrosService.deleteMiembros(this.miembro.id_miembro).subscribe(() => {
      this.getMiembros();  // Recargar la lista después de eliminar
      console.log("Miembro Eliminado");
    },
    error => {
      console.log("Error al eliminar", error);
    });
  }
}
