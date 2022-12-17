import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-securitylogin',
  templateUrl: './securitylogin.component.html',
  styleUrls: ['./securitylogin.component.css']
})
export class SecurityloginComponent {

  username=""
    password=""
    searchuser:any=[]

    constructor(private api:ApiService,private route:Router){}
    readvalue=()=>{
      let data={"username":this.username,"password":this.password}
      console.log(data)
      this.api.securityLogin(data).subscribe(
        (response:any)=>{
          this.username=""
            this.password=""
    
          if(response.status=="success"){
            let securityId=response.securityId
            console.log(securityId)
            localStorage.setItem("userInfo",securityId)
            this.route.navigate(['/secprofile'])
            
          }
          else{
           alert(response.message)
          }
       }
      )
  }
}
