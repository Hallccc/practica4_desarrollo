import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { certificacion } from '../models/certificaciones';
@Injectable({
  providedIn: 'root'
})
export class CertificacionesService {
  private apiUrl="http://localhost:5121/api/Certificaciones/"

  constructor(
    private http:HttpClient
  ) { }

  getCertificaciones():Observable<certificacion[]>{
    return this.http.get<certificacion[]>(this.apiUrl)
  }
  addCertificacion(certificacion:certificacion): Observable<certificacion>{
    return this.http.post<certificacion>(this.apiUrl,certificacion);
  }
  updateCertificacion(id:number,certificacion:certificacion):Observable<certificacion>{
    return this.http.put<certificacion>(`${this.apiUrl}${id}`,certificacion );
  }
  deleteCertificacion(id:number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}${id}`);
  }
}
