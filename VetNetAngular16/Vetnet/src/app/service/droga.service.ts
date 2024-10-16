import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Droga } from '../droga/droga';

@Injectable({
  providedIn: 'root'
})
export class DrogaService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Droga[]> {
    return this.http.get<Droga[]>('http://localhost:8090/droga/all');
  }
 
   findById(id:number):Observable<Droga>{
     return this.http.get<Droga>(`http://localhost:8090/droga/find/${id}`);
 
   }
}
