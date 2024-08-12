import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pago } from '../models/pagos';

@Injectable({
  providedIn: 'root'
})
export class PagosService {
  private apiUrl="http://localhost:5121/api/Pagos/"

  constructor(
    private http:HttpClient
  ) { }

  getPagos():Observable<pago[]>{
    return this.http.get<pago[]>(this.apiUrl)
  }
  addPago(pago:pago): Observable<pago>{
    return this.http.post<pago>(this.apiUrl,pago);
  }
  updatePago(id:number,pago:pago):Observable<pago>{
    return this.http.put<pago>(`${this.apiUrl}${id}`,pago );
  }
  deletePago(id:number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}${id}`);
  }
}
