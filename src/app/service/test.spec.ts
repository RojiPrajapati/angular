import { TestBed } from '@angular/core/testing';
import { Test } from './test';
import { Service } from '@angular/core';
import { inject } from 'vitest';
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient()
  ]
};

@Service
export class TestService{
private httpClient = inject(HttpClient);
  getData(){
    let productId=5;
    let urlPath='https://dummyjson.com/products/'+ productId;
    return this.httpCLient.get(urlPath).subscribe(
      (response)=>{
        console.log(response);

      }
    )

  }
}

