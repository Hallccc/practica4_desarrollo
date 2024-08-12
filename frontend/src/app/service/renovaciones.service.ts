import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { renovacion } from '../models/renovaciones';
@Injectable({
  providedIn: 'root'
})
export class RenovacionesService {
  private apiUrl="http://localhost:5121/api/Renovaciones/"

  constructor(
    private http:HttpClient
  ) { }

  getRenovaciones():Observable<renovacion[]>{
    return this.http.get<renovacion[]>(this.apiUrl)
  }
  addRenovacion(renovacion:renovacion): Observable<renovacion>{
    return this.http.post<renovacion>(this.apiUrl,renovacion);
  }
  updateRenovacion(id:number,renovacion:renovacion):Observable<renovacion>{
    return this.http.put<renovacion>(`${this.apiUrl}${id}`,renovacion );
  }
  deleteRenovacion(id:number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}${id}`);
  }
}
