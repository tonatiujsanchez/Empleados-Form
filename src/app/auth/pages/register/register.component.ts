import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formAuth: FormGroup;
  constructor(
    private router: Router
  ) { 
    this.formAuth = new FormGroup({
      nombre: new FormControl('',[]),
      email: new FormControl('',[]),
      pasword: new FormControl('',[]),
      repitePassword: new FormControl('',[])
    });
  }

  ngOnInit(): void {
  }

  registrarse(){
    this.router.navigate(['/empleados/listado'])
  }

}
