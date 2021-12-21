import { Injectable, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Serviciologin {
  redirectUrl: string = '';

  baseUrl: string = 'http://elfermagister.atwebpages.com/login';
  getLoggedInName: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor(private http: HttpClient, private httpClient: HttpClient) {}

  public userlogin(user: any, password: any) {
    //alert(username) //aparece el usuario de la persona que metio los datos
    return this.httpClient
      .post<any>(this.baseUrl + '/login.php', { user, password })
      .pipe(
        map((User) => {
          this.setToken(User[0].name);
          this.getLoggedInName.emit(true); 
          return User;
        })
      );
  }

  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
    this.getLoggedInName.emit(false);
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true;
    }
    return false;
  }
}
