import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListadoEmpleadosComponent } from './pages/listado-empleados/listado-empleados.component';
import { EmpleadoComponent } from './pages/empleado/empleado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'listado',
                component: ListadoEmpleadosComponent
            },
            {
                path: 'empleado/:idEmpleado',
                component: EmpleadoComponent
            },
            {
                path: 'nuevo',
                component: AgregarComponent
            },
            {
                path: 'editar/:idEmpleado'
            },
            {
                path: '**',
                redirectTo: 'listado'
            }
        ]
    }
];



@NgModule({
    imports: [
        RouterModule.forChild( routes )
    ],
    exports: [
        RouterModule
    ]
})
class EmpleadosRoutingModule{}