import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-security',
  templateUrl: './add-security.component.html',
  styleUrls: ['./add-security.component.css']
})
export class AddSecurityComponent {

  code=""
  securityname=""
  contactno=""
  username=""
  password=""

  constructor(private api:ApiService){}
  readvalues=()=>{
    let data={"code":this.code,"securityname":this.securityname,"contactno":this.contactno,"username":this.username,"password":this.password}

    this.api.addSecurity(data).subscribe(
      (response)=>{
        console.log(response)
      }
    )
  }
}
