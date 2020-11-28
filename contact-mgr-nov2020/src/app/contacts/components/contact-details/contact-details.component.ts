import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: [
  ]
})
export class ContactDetailsComponent implements OnInit {

  contactData: any;

  constructor(private contactService: ContactService) {
    console.log('Inside constructor');
  }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
    // todo: Read URL Parameter in Angular
    this.contactService.getContactById(4)
      .subscribe((res: any) => {
        console.log(res);
        this.contactData = res;
      });
  }

}
