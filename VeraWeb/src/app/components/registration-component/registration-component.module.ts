 
import { NgModule } from '@angular/core';
import { MyMaterialModule } from '../../material.module';
import { RegistrationComponentComponent } from './registration-component.component';
import { RegistrationRoutingModule } from './registration-routing.module';
 
  @NgModule({
     exports:[RegistrationComponentComponent],
     declarations: [RegistrationComponentComponent],
     providers: [],
     imports: [
        RegistrationRoutingModule,
        MyMaterialModule
     ]
  })

  
  export class RegistrationComponentModule { }