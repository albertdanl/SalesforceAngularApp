import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  constructor(private ProductsService: ProductsService) {}


  ngOnInit(): void{
    this.getProducts();
  }


  getProducts(){
    this.ProductsService.getProducts().subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

  /* getProduct(){
    this.ProductsService.getContact("0034x00001DiaYKAAZ").subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
  } */

}
