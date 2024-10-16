import { Injectable } from '@angular/core';
import { Cliente } from '../cliente/cliente';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Mascota } from '../mascota/mascota';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { 
  }

  /*clienteList: Cliente[] = [
    {
      id:1,
      nombre:'pepe',
      correo:'pepe@gmail.com',
      cedula:123456789,
      celular:923874920,
      password:'pepe1234'
    },
    {
      id:2,
      nombre:"gustavo uribe", 
      password:"gustavo1234",
      correo:"centrohumano@yahoo.com", 
      cedula:246810, 
      celular:393487493
    },
    {
      id:3,
      nombre:"James Rodriguez",
      password:"james1234",
      correo:"james@hotmail.com",
      cedula:409856765, 
      celular:43948435
    },
    {
      id:4,
      nombre:"juan",
      password:"juan1234",
      correo:"juan@gmail.com",
      cedula:12345678,
      celular:923874921
    },
  ];*/

 findAll(): Observable<Cliente[]> {
   return this.http.get<Cliente[]>('http://localhost:8090/cliente/all');
 }

  findById(id:number):Observable<Cliente>{
    return this.http.get<Cliente>(`http://localhost:8090/cliente/find/${id}`);

  }

  deleteById(id:number){
    this.http.delete(`http://localhost:8090/cliente/eliminar/${id}`).subscribe();
  }

  addCliente(cliente:Cliente){
    this.http.post('http://localhost:8090/cliente/registrar',cliente).subscribe();
  }

  modificarCliente(cliente: Cliente): Observable<any> {
    return this.http.put(`http://localhost:8090/cliente/modificar/${cliente.id}`, cliente);
  }

  obtenerMascotas(clienteId: number): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(`http://localhost:8090/cliente/mascotas/${clienteId}`);
 }

}
