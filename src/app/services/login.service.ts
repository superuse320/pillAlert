import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string;
  isLoggedIn: boolean=false;
  token: any;
  constructor(private http: HttpClient,
    ) {
    this.url= environment.url
   }
   login(email: String, password: String) {
    return this.http.post(this.url + '/auth/login',
      {email: email, password: password}
    ).pipe(
      tap(token => {
        localStorage.setItem('token',JSON.stringify(token));
        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );
  }
  register(data:any) {
    return this.http.post(this.url+ '/auth/register',
      data
    )
  }



}


