import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavAdminComponent } from './nav-admin/nav-admin.component';
import { NavHomeComponent } from './nav-home/nav-home.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { NavEmpComponent } from './nav-emp/nav-emp.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { AddSecurityComponent } from './add-security/add-security.component';
import { ViewSecurityComponent } from './view-security/view-security.component';
import { LeaveRequestsComponent } from './leave-requests/leave-requests.component';
import { ViewstatusComponent } from './viewstatus/viewstatus.component';
import { EmplogComponent } from './emplog/emplog.component';
import { NavsecurityComponent } from './navsecurity/navsecurity.component';
import { SecurityloginComponent } from './securitylogin/securitylogin.component';
import { SecurityProfileComponent } from './security-profile/security-profile.component';
import { VisitorslogComponent } from './visitorslog/visitorslog.component';
import { ViewlogComponent } from './viewlog/viewlog.component'

const myRoute : Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"adminlogin",
    component:AdminLoginComponent
  },
  {
    path:"addemp",
    component:AddEmployeeComponent
  },
  {
    path:"searchemp",
    component:SearchEmployeeComponent
  },
  {
    path:"emplogin",
    component:EmployeeLoginComponent
  },
  {
    path:"viewemp",
    component:ViewemployeeComponent
  },
  {
    path:"viewprofile",
    component:ViewprofileComponent
  },
  {
    path:"apply",
    component:LeaveApplicationComponent
  },{
    path:"addsec",
    component:AddSecurityComponent
  },
  {
    path:"viewsec",
    component:ViewSecurityComponent
  },
  {
    path:"leaverequest",
    component:LeaveRequestsComponent
  },
  {
    path:"viewstatus",
    component:ViewstatusComponent
  },
  {
    path:"emplog",
    component:EmplogComponent
  },
  {
    path:"seclogin",
    component:SecurityloginComponent
  },
  {
    path:"secprofile",
    component:SecurityProfileComponent
  },
  {
    path:"visitorsLog",
    component:VisitorslogComponent
  },{
    path:"viewlog",
    component:ViewlogComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    HomeComponent,
    AddEmployeeComponent,
    SearchEmployeeComponent,
    EmployeeLoginComponent,
    NavAdminComponent,
    NavHomeComponent,
    ViewemployeeComponent,
    ViewprofileComponent,
    NavEmpComponent,
    LeaveApplicationComponent,
    AddSecurityComponent,
    ViewSecurityComponent,
    LeaveRequestsComponent,
    ViewstatusComponent,
    EmplogComponent,
    NavsecurityComponent,
    SecurityloginComponent,
    SecurityProfileComponent,
    VisitorslogComponent,
    ViewlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
