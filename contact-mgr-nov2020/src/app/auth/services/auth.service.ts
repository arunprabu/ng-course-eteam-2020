import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // registering account
  signup(formData: any): Observable<any> {
    console.log(formData);
    return this.http.post('https://reqres.in/api/register', formData)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  login() {
    
  }
}
