import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { documento } from '../../models/documentos';
import { Observable } from 'rxjs';
import { DocumentosService } from '../../service/documentos.service';
@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrl: './documentos.component.css'
})
export class DocumentosComponent {
  documentos: documento[] = [];
  documento: documento = {
    id_documento: 0,
    id_miembro: 0,
    tipo_documento: '',
    documento_url: '',
    fecha_carga: '',
    estado: '',
  }
  constructor(private DocumentosService: DocumentosService) { }

  ngOnInit(): void {
    this.getDocumentos();
  }

  getDocumentos(): void {
    this.DocumentosService.getDocumentos().subscribe(
      documentos => { this.documentos = documentos; }
    );
  }

  addDocumento(): void {
    this.DocumentosService.addDocumento(this.documento).subscribe(()=>{
      this.getDocumentos();  // Recargar la lista después de agregar
    });
  }

  updateDocumento(): void {
    this.DocumentosService.updateDocumento(this.documento.id_documento, this.documento).subscribe(()=>{
      this.getDocumentos();  // Recargar la lista después de agregar
    });
  }

  deleteDocumento(): void {
    this.DocumentosService.deleteDocumento(this.documento.id_documento).subscribe(
      () => {
        this.getDocumentos();
        console.log("Documento Eliminado");
      },
      error => {
        console.log("Error al eliminar el documento", error);
      }
    );
  }
}


