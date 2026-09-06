import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private httpClient = inject(HttpClient);

  getData() {

    const urlPath = 'https://dummyjson.com/products/add';

    const headers = new HttpHeaders({
      Authorization: 'Bearer XYZToken',
      'Content-Type': 'application/json'
    });

    const bodyVariable = { id: 5 };

    this.httpClient.post(urlPath, bodyVariable, { headers }).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }
}