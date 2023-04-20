// registro.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  registroForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    this.registroForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit() {
    //console.log(this.registroForm.value);
    alert('Registro Exitoso!');
  }
//Getters para acceder facil
  get nombre() {
    return this.registroForm.get('nombre');
  }
  get apellido() {
    return this.registroForm.get('apellido');
  }
  get email() {
    return this.registroForm.get('email');
  }
  get clave() {
    return this.registroForm.get('clave');
  }
}
