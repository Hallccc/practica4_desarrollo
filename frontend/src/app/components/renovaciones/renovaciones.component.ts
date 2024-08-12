import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { renovacion } from '../../models/renovaciones';
import { RenovacionesService } from '../../service/renovaciones.service';

@Component({
  selector: 'app-renovacion',
  templateUrl: './renovaciones.component.html',
  styleUrl: './renovaciones.component.css'
})
export class RenovacionComponent implements OnInit{
  renovaciones: renovacion[] = [];
  renovacion: renovacion = {
    id_renovacion: 0,
    id_miembro: 0,
    id_pago: 0,
    id_documento: 0,
    fecha_solicitud: '',
    fecha_aprobacion: '',
    estado: '',
  }

  constructor(private RenovacionesService: RenovacionesService) { }

  ngOnInit(): void {
    this.getRenovaciones();
  }

  getRenovaciones(): void {
    this.RenovacionesService.getRenovaciones().subscribe(
      renovaciones => { this.renovaciones = renovaciones; }
    );
  }

  addRenovacion(): void {
    this.RenovacionesService.addRenovacion(this.renovacion).subscribe(()=>{
      this.getRenovaciones();  // Recargar la lista después de agregar
    });
  }

  updateRenovacion(): void {
    this.RenovacionesService.updateRenovacion(this.renovacion.id_renovacion, this.renovacion).subscribe(()=>{
      this.getRenovaciones();  // Recargar la lista después de agregar
    });
  }

  deleteRenovacion(): void {
    this.RenovacionesService.deleteRenovacion(this.renovacion.id_renovacion).subscribe(
      () => {
        this.getRenovaciones();
        console.log("Renovación Eliminada");
      },
      error => {
        console.log("Error al eliminar la renovación", error);
      }
    );
  }
}
