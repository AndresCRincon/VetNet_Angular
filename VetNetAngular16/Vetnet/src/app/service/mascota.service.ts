import { Injectable } from '@angular/core';
import { Mascota } from '../mascota/mascota';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(private http: HttpClient) { }

  /*mascotaList: Mascota[] = [
    {
      id: 1,
      nombre: "Rex",
      peso: "25kg",
      raza: "Pastor Alemán",
      enfermedad: "Ninguna",
      estado: "Activo",
      edad: 5
    },
    {
      id: 2,
      nombre: "Luna",
      peso: "8kg",
      raza: "Chihuahua",
      enfermedad: "Catarro",
      estado: "Enferma",
      edad: 3
    },
    {
      id: 3,
      nombre: "Pablo",
      peso: "30kg",
      raza: "Labrador",
      enfermedad: "Problemas de piel",
      estado: "Activo",
      edad: 7
    },
    {
      id: 4,
      nombre: "Bella",
      peso: "12kg",
      raza: "Beagle",
      enfermedad: "Alérgica a los alimentos",
      estado: "Recuperándose",
      edad: 4
    },
    {
      id: 5,
      nombre: "Charlie",
      peso: "20kg",
      raza: "Bulldog Francés",
      enfermedad: "Ninguna",
      estado: "Activo",
      edad: 6
    }
  ];*/

  /*updateMascota(id:number) {
    const index = this.mascotaList.findIndex(m => m.id === mascota.id);
    this.mascotaList[index] = mascota;
    this.http.put('http://localhost:8090/mascota/modificar',+id).subscribe();
  }*/

  updateMascota(mascota: Mascota, id:number): Observable<Mascota> {
    return this.http.put<Mascota>(`http://localhost:8090/mascota/modificar/${mascota.id}/${id}`, mascota);
  }
  
  findAll(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>('http://localhost:8090/mascota/all');
  }
 
   findById(id:number):Observable<Mascota>{
    return this.http.get<Mascota>(`http://localhost:8090/mascota/find/${id}`);
   }

   findByCliente(id:number):Observable<Mascota[]>{
    return this.http.get<Mascota[]>(`http://localhost:8090/mascota/cliente/${id}`);
  }
 
   deleteById(id:number){
     this.http.delete(`http://localhost:8090/mascota/eliminar/${id}`).subscribe();
   }
  
   addMascota(mascota:Mascota, id:number){
    this.http.post(`http://localhost:8090/mascota/registrar/${id}`,mascota).subscribe();
  }
}
