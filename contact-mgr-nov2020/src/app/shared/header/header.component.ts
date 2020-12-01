import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartDataService } from '../services/cart-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartItemCount: number;

  constructor(private router: Router, private cartDatService: CartDataService) { }

  ngOnInit(): void {
    this.cartDatService.latestCartItems.subscribe((cartItems: any[]) => {
      console.log(cartItems);
      if (cartItems && cartItems.length > 0) {
        this.cartItemCount = cartItems.length;
      }else {
        this.cartItemCount = 0;
      }
    });
  }

  gotoCartHandler(): void {
    this.router.navigate(['products', 'cart']);
    // todo: learn about navigateByUrl
  }
}
