import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Serviciologin } from '../serviciologin.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  });

  submitted: boolean = false;

  usuario2 = {
    idUsuario: null,
    user: null,
    password: null,
  };

  constructor(
    private servicioLogin: Serviciologin,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuario = this.formBuilder.group({
      user: ['', [Validators.required, Validators.maxLength(20)]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.usuario.controls;
  }

  iniciarSesion() {
    //funcion de formulario iniciar seccion

    this.submitted = true;

    if (this.usuario.invalid) {
      return;
    }
    //alert('Mensaje Enviado !'+JSON.stringify(this.contacto.value))
    //  console.log('Mensaje Enviado !'+JSON.stringify(this.contacto.value))

    this.iniciar_sesion(this.usuario);
  }

  iniciar_sesion(usuario: any) {
    this.servicioLogin
      .userlogin(usuario.value.user, usuario.value.password)
      .pipe(first())
      .subscribe(
        (data:any) => {
          const redirect = this.servicioLogin.redirectUrl
            ? this.servicioLogin.redirectUrl
            : '/dashboard';
          this.router.navigate([redirect]);
        },
        (error : any) => {
          //ventana4(); //ventana de mensaje javascripts cuando esta incorrectos los datos
        }
      );
  }
}
