import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', pathMatch:'full', redirectTo: 'empleados'
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
    loadChildren: ()=> import( './not-found/not-found.module' ).then( m=> m.NotFoundModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
