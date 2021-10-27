 
import { NgModule } from '@angular/core';
import { MyMaterialModule } from '../../material.module';
import { LoginComponentComponent } from './login-component.component';
import { LoginRoutingModule } from './login-routing.module';



  @NgModule({
     exports:[LoginComponentComponent],
     declarations: [LoginComponentComponent],
     providers: [],
     imports: [
        LoginRoutingModule,
        MyMaterialModule,
        
     ]
  })

  
  export class LoginComponentModule { }