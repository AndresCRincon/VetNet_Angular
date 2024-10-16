import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../admin/admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {

  constructor(private http: HttpClient) {}

  getActivePetsCount(): Observable<number> {
    return this.http.get<number>(`http://localhost:8090/admin/mascotasActivas`);
  }

  getTotalTreatmentsCount(): Observable<number> {
    return this.http.get<number>(`http://localhost:8090/admin/tratamientosTotales`);
  }

  getTotalTreatmentCost(): Observable<number> {
    return this.http.get<number>(`http://localhost:8090/admin/costoTratamientos`);
  }

  login(admin: Admin): Observable<any> {
    return this.http.post(`http://localhost:8090/admin/login`, admin);
  }

  getSpecialtiesDistribution(): Observable<{ [key: string]: number }> {
    return this.http.get<{ [key: string]: number }>(`http://localhost:8090/admin/specialtiesDistribution`);
  }

  getTopPricedMedications(): Observable<any> {
    return this.http.get('http://localhost:8090/admin/medicamentos/top-prices');
  }
  
  
}

