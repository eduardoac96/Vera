import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyMaterialModule } from './material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { BodyComponentComponent } from './components/body-component/body-component.component';
import { SearchComponentComponent } from './components/search-component/search-component.component';
import { SearchOptionsComponent } from './components/search-options/search-options.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponentComponent,
    BodyComponentComponent,
    SearchComponentComponent,
    SearchOptionsComponent
  ],
  imports: [ 
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule,
    MyMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
