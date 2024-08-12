import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { certificacion } from '../../models/certificaciones';
import { CertificacionesService } from '../../service/certificaciones.service';

@Component({
  selector: 'app-certificacion',
  templateUrl: './certificaciones.component.html',
  styleUrl: './certificaciones.component.css'
})
export class CertificacionComponent implements OnInit{
  certificaciones: certificacion[] = [];
  certificacion: certificacion = {
    id_certificacion: 0,
    id_documento: 0,
    tipo_certificacion: '',
    fecha_emision: '',
    fecha_expiracion: '',
    certificado_url: '',
    estado: '',
  }

  constructor(private CertificacionesService: CertificacionesService) { }

  ngOnInit(): void {
    this.getCertificaciones();
  }

  getCertificaciones(): void {
    this.CertificacionesService.getCertificaciones().subscribe(
      certificaciones => { this.certificaciones = certificaciones; }
    );
  }

  addCertificacion(): void {
    this.CertificacionesService.addCertificacion(this.certificacion).subscribe(()=>{
      this.getCertificaciones();  // Recargar la lista después de agregar
    });
  }

  updateCertificacion(): void {
    this.CertificacionesService.updateCertificacion(this.certificacion.id_certificacion, this.certificacion).subscribe(()=>{
      this.getCertificaciones();  // Recargar la lista después de agregar
    });
  }

  deleteCertificacion(): void {
    this.CertificacionesService.deleteCertificacion(this.certificacion.id_certificacion).subscribe(
      () => {
        this.getCertificaciones();
        console.log("Certificación Eliminada");
      },
      error => {
        console.log("Error al eliminar la certificación", error);
      }
    );
  }
}
