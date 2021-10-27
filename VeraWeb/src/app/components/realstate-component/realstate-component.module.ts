 
import { NgModule } from '@angular/core';
import { MyMaterialModule } from '../../material.module';
import { RealStateComponentComponent } from './realstate-component.component';
import { RealStateRoutingModule } from './realstate-routing.module';
 

  @NgModule({
     exports:[RealStateComponentComponent],
     declarations: [RealStateComponentComponent],
     providers: [],
     imports: [
        RealStateRoutingModule,
        MyMaterialModule
     ]
  })

  
  export class RealStateComponentModule { }