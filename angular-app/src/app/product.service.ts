import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private BASE_URL = environment.apiUrl;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  addProduct(data: any) {
    return this.http.post(`${this.BASE_URL}/addProduct`, data, this.httpOptions).pipe(
      map(
        (response: any) => {
          return response;
        },
        (error: any) => {
          throw error;
        }
      )
    );
  }

  getProducts() {
    return this.http.get(`${this.BASE_URL}/getProducts`, this.httpOptions).pipe(
      map(
        (response: any) => {
          return response;
        },
        (error: any) => {
          throw error;
        }
      )
    );
  }


}