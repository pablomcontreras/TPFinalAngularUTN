import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required]],
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    //console.log(this.loginForm.value);
    alert('Bienvenido!');
  }

  //pongo getters para hacer mas facil el acceso
  get email() {
    return this.loginForm.get('email');
  }
  get clave() {
    return this.loginForm.get('clave');
  }
}

