import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./components/registration-component/registration-component.module').then(m => m.RegistrationComponentModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login-component/login-component.module').then(m => m.LoginComponentModule)
  },
  {
    path: 'realstate',
    loadChildren: () => import('./components/realstate-component/realstate-component.module').then(m => m.RealStateComponentModule)
  },
  { 
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/