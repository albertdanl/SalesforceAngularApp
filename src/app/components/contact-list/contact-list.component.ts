import { Component } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {

  constructor(private _contactsServices: ContactsService) {}

  ngOnInit(): void{
    this.getContacts();
  }

  getContacts(){
    this._contactsServices.getContacts().subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

  getContact(){
    this._contactsServices.getContact("0034x00001DiaYKAAZ").subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
  }
}
