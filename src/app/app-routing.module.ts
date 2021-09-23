import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { HomeComponent } from './empleados/pages/home/home.component';
import { RegisterComponent } from './auth/pages/register/register.component';

const routes: Routes = [
  {
    path:'', pathMatch:'full', redirectTo: 'auth'
  },
  {
    path: 'auth',
    loadChildren: ()=> import( './auth/auth.module' ).then( m => m.AuthModule )
  },
  {
    path: 'empleados',
    loadChildren: () => import( './empleados/empleados.module' ).then( m => m.EmpleadosModule )
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
