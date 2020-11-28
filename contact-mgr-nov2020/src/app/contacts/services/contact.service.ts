import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Decorator
@Injectable({
  providedIn: 'root' // singleton
})
export class ContactService {

  private REST_API_URL = 'http://jsonplaceholder.typicode.com/users';

  constructor( private http: HttpClient ) { }

  createContact( contactFormData: any ): any { // 1. get the data from the comp ts
    console.log(contactFormData);

    // 2. send the data to the rest api backend
    // 2.1. what's the rest api url? - http://jsonplaceholder.typicode.com/users
    // 2.2. what's the http method? - POST
    // 2.3. What's the tool we have to use to sent the above data? - HttpClient
    return this.http.post(this.REST_API_URL, contactFormData)
      .pipe( map( (res: any) => { // 3. get the resp from the rest api backend
        console.log(res);
        return res;     // 4. send it back to the comp ts
      }));

  }
}
