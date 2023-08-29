import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  url = 'http://localhost:8080/contacts';
  getOneConurl = "";
  

  constructor(private http: HttpClient) { }

  getContacts(): Observable<any> {
    return this.http.get(this.url);
  }

  getContact(contactId: string): Observable<any> {
    this.getOneConurl = "http://localhost:8080/contacts/" + contactId;
    return this.http.get(this.getOneConurl);
  }
}
