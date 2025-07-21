import { inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, MyAappComponentt } from './app.component';
import { BindingComponent } from './../binding/binding.component';
import { FormsModule } from '@angular/forms';
import { CustomerModule } from 'src/di/customer.module';
import { DataflowModule } from 'src/intercomp/dataflow.module';
import {
  ChildComponent,
  LIfeCycleComponent,
} from 'src/lifecycle/lifecycledemo';
import { InjectComponent } from 'src/dynamic/inject.componnet';
import { HttpClientModule } from '@angular/common/http';
import { HttpComponent } from 'src/http/http.component';

@NgModule({
  declarations: [
    AppComponent,
    MyAappComponentt,
    BindingComponent,
    LIfeCycleComponent,
    ChildComponent,
    InjectComponent,
    HttpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomerModule,
    DataflowModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
