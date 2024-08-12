import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { usuario } from '../../models/usuario';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit{
  usuarios:usuario[] =[];
  usuario:usuario ={
    id_usuario:0,
    id_miembro:0,
    username:'',
    password_hash:'',
    rol:'',
    fecha_creacion:'',
    ultimo_acceso:'',
  }
  showPassword: boolean = false;

  constructor(private usuariosService:UsuarioService){

  }
  ngOnInit(): void {
    //inicializar
    this.getUsuarios();
  }
  getUsuarios():void{
    this.usuariosService.getUsuarios().subscribe(
      usuarios => {this.usuarios=usuarios}
    );
  }

  addUsuario():void{
    this.usuariosService.addUsuario(this.usuario).subscribe(()=>{
      this.getUsuarios();  // Recargar la lista después de agregar
    });
    
  }

  updateUsuario():void{
    this.usuariosService.updateUsuario(this.usuario.id_usuario, this.usuario).subscribe(()=>{
      this.getUsuarios();  // Recargar la lista después de agregar
    });
  }

  deleteUsuario():void{
    this.usuariosService.deleteUsuario(this.usuario.id_usuario).subscribe(
      () => {
        this.getUsuarios();
        console.log("Usuario Eliminado")
      },
      error => {
        console.log("Error al eliminar el error",error)
      }
    );
  }


}
