import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addemployee=(dataTosend:any)=>{
    return this.http.post("http://localhost:8080/addemp",dataTosend)
  }
  searchemployee=(dataTosend:any)=>{
    return this.http.post("http://localhost:8080/search",dataTosend)
  }
  deleteEmployee=(dataTosend:any)=>{
    return this.http.post("http://localhost:8080/delete",dataTosend)
  }
}
