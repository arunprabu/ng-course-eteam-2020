import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

   // have one variable to hold cartItems -- an array
   private currentCartItems: any[] = [
    {
      id: 2,
      name: 'Butter',
      category: 'Dairy',
      price: '$10'
    }
  ];

  // Step 1: Create BehaviorSubject with default value for making it observable
  private cartItemsList = new BehaviorSubject<any[]>(this.currentCartItems);

  // Step 2: Make the cartItemsList as observable

  constructor() { }
}
