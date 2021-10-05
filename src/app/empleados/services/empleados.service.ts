import { Injectable } from '@angular/core';
import { tap } from "rxjs/operators";
import { depto, Empleado } from '../interfaces/empleado.interface';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private empleados: Empleado[] = [];



  constructor() {
    this.empleados = JSON.parse( localStorage.getItem('empleadosForm')! ) || [];
  }

  

  getEmpleados(){
    
    return new Observable<Empleado[]>(( observer )=>{
      observer.next( this.empleados );
  
    }).pipe(
      tap( resp => console.log( resp ) )
    );
  }

  addEmpleado( empleado: Empleado ){

    
    
    this.empleados.push( empleado );
    localStorage.setItem( 'empleadosForm', JSON.stringify( this.empleados ) );
  }


}
