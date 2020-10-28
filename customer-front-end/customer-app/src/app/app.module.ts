import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { GetcustomerComponent } from './getcustomer/getcustomer.component';
import { GetbynameComponent } from './getbyname/getbyname.component';
import { AllcustomerComponent } from './allcustomer/allcustomer.component';
import { CustomerService } from './service/customerservice';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddcustomerComponent,
    GetcustomerComponent,
    GetbynameComponent,
    AllcustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CustomerService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
