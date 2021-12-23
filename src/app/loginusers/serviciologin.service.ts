import { Injectable, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Serviciologin {
  redirectUrl: string = '';

  baseUrl: string = 'http://elfermagister.atwebpages.com/login';
  //baseUrl: string = 'login';
  getLoggedInName: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor(private httpClient: HttpClient) {}

  public userlogin(user: any, password: any) {
    
    const headers = new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers':'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
        'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, DELETE',
        'Allow':'GET, POST, OPTIONS, PUT, DELETE'
    });

    //alert(username) //aparece el usuario de la persona que metio los datos
    return this.httpClient
      .post<any>(this.baseUrl + '/login.php', { user, password, headers })
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
