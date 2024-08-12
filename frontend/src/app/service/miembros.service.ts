import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { miembro } from '../models/miembros';

@Injectable({
  providedIn: 'root'
})
export class MiembrosService {
  private apiUrl="http://localhost:5121/api/Miembros/";
  constructor(
    private http:HttpClient
  ) { }
  getMiembros():Observable<miembro[]>{
    return this.http.get<miembro[]>(this.apiUrl)
  }
  addMiembros(miembro:miembro): Observable<miembro>{
    return this.http.post<miembro>(this.apiUrl,miembro);
  }
  updateMiembros(id:number,miembro:miembro):Observable<miembro>{
    return this.http.put<miembro>(`${this.apiUrl}${id}`,miembro );
  }
  deleteMiembros(id:number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}${id}`);
  }
  
}
