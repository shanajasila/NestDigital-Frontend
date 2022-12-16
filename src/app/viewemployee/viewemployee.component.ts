import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent {
  empcode=""
  empname=""
 designation=""
 contact=""
  email=""
  


  constructor(private api:ApiService){
    api.fetchemployee().subscribe(
      (response)=>{
        this.employee=response
      }
    )
  }
employee:any=[]
}

