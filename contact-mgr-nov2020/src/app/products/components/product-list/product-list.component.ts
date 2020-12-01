import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: [
  ]
})
export class ProductListComponent implements OnInit {

  productList: any[];

  constructor( private productService: ProductService) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
    console.log(this.productList);
  }

}
