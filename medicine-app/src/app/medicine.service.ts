import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicine } from './models/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  private apiUrl = 'https://localhost:7026/medicines'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getMedicines(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(this.apiUrl);
  }
}
