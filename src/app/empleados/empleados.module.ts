import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ListadoEmpleadosComponent } from './pages/listado-empleados/listado-empleados.component';
import { EmpleadoComponent } from './pages/empleado/empleado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListadoEmpleadosComponent,
    EmpleadoComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmpleadosModule { }
