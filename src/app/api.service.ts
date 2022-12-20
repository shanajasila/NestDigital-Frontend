import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchemployee=()=>{
    return this.http.get("http://localhost:8080/view")
  }

  addemployee=(dataTosend:any)=>{
    return this.http.post("http://localhost:8080/addemp",dataTosend)
  }
  searchemployee=(dataTosend:any)=>{
    return this.http.post("http://localhost:8080/search",dataTosend)
  }
  deleteEmployee=(dataTosend:any)=>{
    return this.http.post("http://localhost:8080/delete",dataTosend)
  }
  userlogin=(dataTosend:any)=>{
    return this.http.post("http://localhost:8080/login",dataTosend)
  }
  viewprofile=(data:any)=>{
    return this.http.post("http://localhost:8080/viewprofile",data)
  }
  
  applyLeave=(data:any)=>{
      return this.http.post("http://localhost:8080/applyleave",data);
  }
  addSecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/addsecurity",data)
  }
  fetchsecurity=()=>{
    return this.http.get("http://localhost:8080/viewsec")
  }
  fetchRequest=()=>{
    return this.http.get("http://localhost:8080/viewalleavebyemp")
  }
  updatestatus=(dataTosend:any)=>{
    return this.http.post("http://localhost:8080/update",dataTosend)
  }
  viewstatus=(data:any)=>{
    return this.http.post("http://localhost:8080/searchstatus",data)
  }
  searchStatus=(data:any)=>{
    return this.http.post("http://localhost:8080/searchstatus",data)
  }
  addemployeelog=(data:any)=>{
    return this.http.post("http://localhost:8080/emplog",data)
  }
  securityLogin=(data:any)=>{
    return this.http.post("http://localhost:8080/securitylogin",data)
  }
  viewSecurityProfile=(data:any)=>{
    return this.http.post("http://localhost:8080/viewprofilesec",data)
  }
  addVisitorslog=(data:any)=>{
    return this.http.post("http://localhost:8080/logvisitor",data)
  }
  viewemplog=()=>{
    return this.http.get("http://localhost:8080/viewallemplog")
  }
  viewvisitorlog=()=>{
    return this.http.get("http://localhost:8080/viewallvisitorlog")
  }
  dailyemplog=(data:any)=>{
    return this.http.post("http://localhost:8080/viewdailyemplog",data)
  }
  dailyvisitorslog=(data:any)=>{
    return this.http.post("http://localhost:8080/viewDailyVisitorlog",data)
  }
}
