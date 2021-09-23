import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formAuth: FormGroup;

  constructor(
    private router: Router
  ) { 
    this.formAuth = new FormGroup({
      email: new FormControl('',[]),
      pasword: new FormControl('',[])
    });
  }

  ngOnInit(): void {
  }

  ingresar(){
    this.router.navigate(['/empleados/listado']);
  }
}
