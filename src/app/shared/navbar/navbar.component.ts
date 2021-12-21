import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Serviciologin } from 'src/app/loginusers/serviciologin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  loged: boolean = false;

  constructor(public servicioLogin: Serviciologin, private router: Router) { }

  ngOnInit(): void {
    this.loged = this.servicioLogin.isLoggedIn();
    this.servicioLogin.getLoggedInName.subscribe((data) => {
      this.loged = data;
    });
  }

  cerrarSesion() {
    this.servicioLogin.deleteToken();
    this.router.navigate(['home']);
  }
}
