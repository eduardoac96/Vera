import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RealStateComponentComponent } from './realstate-component.component';
  

const routes: Routes = [
  {
    path: '',
    component: RealStateComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealStateRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/