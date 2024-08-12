import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl="http://localhost:5121/api/Usuarios/"

  constructor(
    private http:HttpClient
  ) { }

  getUsuarios():Observable<usuario[]>{
    return this.http.get<usuario[]>(this.apiUrl)
  }
  addUsuario(usuario:usuario): Observable<usuario>{
    return this.http.post<usuario>(this.apiUrl,usuario);
  }
  updateUsuario(id:number,usuario:usuario):Observable<usuario>{
    return this.http.put<usuario>(`${this.apiUrl}${id}`,usuario );
  }
  deleteUsuario(id:number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}${id}`);
  }
}
