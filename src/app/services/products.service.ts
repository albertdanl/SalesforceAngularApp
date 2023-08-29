import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = 'http://localhost:8080/Products';
  getOneProd = "";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.url);
  }

  /* getContact(producttId: string): Observable<any> {
    this.getOneProd = "http://localhost:8080/contacts/" + contactId;
    return this.http.get(this.getOneConurl);
  } */
}



