import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../interfaces/empleado.interface';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.component.html',
  styleUrls: ['./listado-empleados.component.css']
})
export class ListadoEmpleadosComponent implements OnInit {

  empleados: Empleado[] = [];

  constructor(
    private _empleados: EmpleadosService
  ) { }

  ngOnInit(): void {
    this._empleados.getEmpleados()
      .subscribe(
        resp => this.empleados = resp
      );
  }

}
