import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
    `
      .brownText{
        color: brown;
      }
    `
  ]
})
export class ConceptsComponent implements OnInit {

  // string interpolation related
  appName = 'Contact Manager App!';
  noOfDevelopers = 10;

  // property binding
  averageExp = 2;

  // for ngStyle
  myStyles: any = {
    backgroundColor: 'yellow',
    color: 'black'
  };

  constructor() { }

  ngOnInit(): void {
  }

  // event binding related
  clickMeHandler(): void {
    alert('clicked');
  }

}
