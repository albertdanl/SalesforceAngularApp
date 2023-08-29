import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  //nice color = 7096b0

  constructor(private router: Router) {}

  ngOnInit(){

  }

 public goTo(url : string) : void{
    console.log(url);
    this.router.navigate(["opportunities"]);
  }
}
