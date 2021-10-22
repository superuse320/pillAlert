import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string;
  isLoggedIn = false;
  token: any;
  data: any;
  constructor(private http: HttpClient,
  ) {
    this.url = environment.url;
  }

  login(email: string, password: string) {
    return this.http.post(this.url + '/auth/login',
      {email, password}
    ).pipe(
      tap(token => {
        localStorage.setItem('token', JSON.stringify(token));
        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );
  }
  register(email: string,name: string,username: string,password: string){ 
  //register(data: any) {
    return this.http.post(this.url + '/auth/register',
    {email,name,username,password}
    ).pipe(
      tap(data => {
        localStorage.setItem('token', JSON.stringify(data));
        this.token = data;
        this.isLoggedIn = true;
        return data;
      }),
    );
  }


}


