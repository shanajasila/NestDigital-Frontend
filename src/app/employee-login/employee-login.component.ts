import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
  username=""
  Password=""

  searchuser:any=[]

  constructor(private api:ApiService,private route:Router){}
  readvalue=()=>{
    let data={"username":this.username,"password":this.Password}
    console.log(data)
    this.api.userlogin(data).subscribe(
      (response:any)=>{
        this.username=""
          this.Password=""
  
        if(response.status=="success"){
          let userId=response.userId
          console.log(userId)
          localStorage.setItem("userInfo",userId)
          this.route.navigate(['/viewprofile'])
          
        }
        else{
         alert(response.message)
        }
     }
    )
}

}
