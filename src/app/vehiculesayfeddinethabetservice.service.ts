import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { vehicule } from '../../models/vehicule';

@Injectable({
  providedIn: 'root'
})
export class VehiculeSayfeddineThabetService {
  private apiUrl = 'http://localhost:3000/vehicules';

  constructor(private http: HttpClient) {}

  getVehicules(): Observable<vehicule[]> {
    return this.http.get<vehicule[]>(this.apiUrl);
  }

  getVehicule(id: number): Observable<vehicule> {
    return this.http.get<vehicule>(`${this.apiUrl}/${id}`);
  }

  addVehicule(vehicule: vehicule): Observable<vehicule> {
    return this.http.post<vehicule>(this.apiUrl, vehicule);
  }

  deleteVehicule(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
} 