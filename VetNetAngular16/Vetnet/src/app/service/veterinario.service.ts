import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veterinario } from '../veterinario/veterinario';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  constructor(private http: HttpClient) {}

  login(veterinario: Veterinario): Observable<any> {
    return this.http.post(`http://localhost:8090/veterinario/login`, veterinario);
  }

  getAllVeterinarios(): Observable<Veterinario[]> {
    return this.http.get<Veterinario[]>(`http://localhost:8090/veterinario/all`);
  }

  getVeterinarioById(id: number): Observable<Veterinario> {
    return this.http.get<Veterinario>(`http://localhost:8090/veterinario/${id}`);
  }

  registrar(veterinario: Veterinario): Observable<any> {
    return this.http.post(`http://localhost:8090/veterinario/registrar`, veterinario);
  }

  modificarVeterinario(veterinario: Veterinario): Observable<any> {
    return this.http.put(`http://localhost:8090/veterinario/modificar/${veterinario.id}`, veterinario);
  }

  eliminarVeterinario(id: number){
    return this.http.delete(`http://localhost:8090/veterinario/eliminar/${id}`).subscribe();
  }
}
