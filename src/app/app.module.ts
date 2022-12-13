import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    HomeComponent,
    AddEmployeeComponent,
    SearchEmployeeComponent,
    EmployeeLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
