import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Servicioadmin } from '../servicioadmin.service';

@Component({
  selector: 'app-register-users',
  templateUrl: './register-users.component.html',
  styleUrls: ['./register-users.component.css'],
})
export class RegisterUsersComponent implements OnInit {
  contacto1 = null;
  name: string = '';

  contacto: FormGroup = new FormGroup({});
  submitted = false;

  ocupaciones = [
    {
      description: 'SECRETARIA',
    },
    {
      description: 'ADMINISTRADOR',
    },
  ];

  contacto2 = {
    name: null,
    user: null,
    password: null,
    occupation: null,
  };

  constructor(
    private servicioAdmin: Servicioadmin,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.contacto = this.formBuilder.group({
      name: ['', Validators.required],
      user: ['', [Validators.required]],
      password: ['', Validators.required],
      occupation: ['', Validators.required],
    });
  }

  get f() {
    return this.contacto.controls;
  }

  registrar() {
    //funcion de formulario registrar

    this.submitted = true;

    if (this.contacto.invalid) {
      return;
    }
    //alert('Mensaje Enviado !'+JSON.stringify(this.user.value))
    //  console.log('Mensaje Enviado !'+JSON.stringify(this.user.value))

    this.insertarUsuario();
  }

  insertarUsuario() {
    //this.servicioAdmin.insertarUsuario(this.contacto.value);
    this.servicioAdmin.insertarUsuario(this.contacto.value).subscribe((datos) => {
      /*if (datos['resultado'] == 'OK') {
        ventana2();
      }*/
    });
  }

  hayRegistros() {
    if (this.contacto1 == null) {
      return false;
    } else {
      return true;
    }
  }
}
