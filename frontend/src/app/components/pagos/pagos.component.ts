import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { pago } from '../../models/pagos';
import { PagosService } from '../../service/pagos.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.css'
})
export class PagoComponent implements OnInit{
  pagos: pago[] = [];
  pago: pago = {
    id_pago: 0,
    id_miembro: 0,
    monto: 0,
    fecha_pago: '',
    tipo_pago: '',
    comprobante_url: '',
    estado: '',
  }

  constructor(private PagosService: PagosService) { }

  ngOnInit(): void {
    this.getPagos();
  }

  getPagos(): void {
    this.PagosService.getPagos().subscribe(
      pagos => { this.pagos = pagos; }
    );
  }

  addPago(): void {
    this.PagosService.addPago(this.pago).subscribe(()=>{
      this.getPagos();  // Recargar la lista después de agregar
    });
  }

  updatePago(): void {
    this.PagosService.updatePago(this.pago.id_pago, this.pago).subscribe(()=>{
      this.getPagos();  // Recargar la lista después de agregar
    });
  }

  deletePago(): void {
    this.PagosService.deletePago(this.pago.id_pago).subscribe(
      () => {
        this.getPagos();
        console.log("Pago Eliminado");
      },
      error => {
        console.log("Error al eliminar el pago", error);
      }
    );
  }
}
