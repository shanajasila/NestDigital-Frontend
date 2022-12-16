import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-security',
  templateUrl: './view-security.component.html',
  styleUrls: ['./view-security.component.css']
})
export class ViewSecurityComponent {

  code=""
  securityname=""
  contactno=""
  username=""
  password=""

  constructor(private api:ApiService){
    api.fetchsecurity().subscribe(
      (response)=>{
        this.security=response
      }
    )
  }
security:any=[]
}
