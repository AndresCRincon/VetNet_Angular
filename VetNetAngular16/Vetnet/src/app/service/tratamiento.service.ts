import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tratamiento } from '../tratamiento/tratamiento';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  constructor(private http: HttpClient) {}

  findAll(): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>(`http://localhost:8090/tratamiento/all`);
  }

  findByVeterinario(id: number): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>(`http://localhost:8090/tratamiento/veterinario/${id}`);
  }

  registrarTratamiento(tratamiento: Tratamiento): Observable<any> {
    return this.http.post(`http://localhost:8090/tratamiento/registrar`, tratamiento);
  }

  modificarTratamiento(tratamiento: Tratamiento): Observable<any> {
    return this.http.put(`http://localhost:8090/tratamiento/modificar/${tratamiento.id}`, tratamiento);
  }

  deleteById(id: number){
    return this.http.delete(`http://localhost:8090/tratamiento/eliminar/${id}`).subscribe();
  }
}
