import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { depto } from '../../interfaces/empleado.interface';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  formEmpleado: FormGroup;

  constructor(
    private router: Router,
    private _empleados: EmpleadosService
  ) { 
    this.formEmpleado = new FormGroup({
      nombre: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      apellidos: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.pattern(/^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/)
      ]),
      edad: new FormControl(''),
      departamento: new FormControl('',
        Validators.required),
      password: new FormControl('',[
        Validators.required
      ]),
      repitePassword: new FormControl('',[
        Validators.required
      ]),
      foto: new FormControl('')
    });
  }

  ngOnInit(): void {

  }

  // TODO: Aun no esta implementado
  ValidatorRepitePassword( control: any ){
    console.log( control )
    
    if( true ){
      return null;
    } else{
      return { dnivalidator: 'Las contraseñas no coinciden' }
    }
  }




  guardar(){
    // console.log( this.formEmpleado.value );
    // console.log( this.formEmpleado.value.departamento );
    
    this._empleados.addEmpleado( this.formEmpleado.value );
  }




}
