import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { documento } from '../models/documentos';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {
  private apiUrl="http://localhost:5121/api/Documentos/"

  constructor(
    private http:HttpClient
  ) { }

  getDocumentos():Observable<documento[]>{
    return this.http.get<documento[]>(this.apiUrl)
  }
  addDocumento(documento:documento): Observable<documento>{
    return this.http.post<documento>(this.apiUrl,documento);
  }
  updateDocumento(id:number,documento:documento):Observable<documento>{
    return this.http.put<documento>(`${this.apiUrl}${id}`,documento );
  }
  deleteDocumento(id:number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}${id}`);
  }
}
