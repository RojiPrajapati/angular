import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private httpClient = inject(HttpClient);

  getAllProduct(): Observable<any> {

    const urlPath = 'https://dummyjson.com/products';

    const headers = new HttpHeaders({
      Authorization: 'Bearer XYZToken',
      'Content-Type': 'application/json'
    });

    return this.httpClient.get(urlPath, { headers });
  }
}