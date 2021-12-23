import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Servicioadmin {
  baseUrl: string = 'http://elfermagister.atwebpages.com/admin';
  constructor(private http: HttpClient) {}

  insertarUsuario(contacto: any) {
    //alert('Mensaje Enviado !'+JSON.stringify(contacto.password))
    return this.http.post(
      `${this.baseUrl}/register.php`,
      JSON.stringify(contacto)
    );
  }
}
