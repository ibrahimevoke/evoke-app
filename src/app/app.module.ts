import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent,MyAappComponentt } from './app.component';
import { BindingComponent } from './../binding/binding.component';
import { FormsModule } from '@angular/forms';
import { CustomerModule } from 'src/di/customer.module';

@NgModule({
  declarations: [
    AppComponent,
    MyAappComponentt,
    BindingComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomerModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
