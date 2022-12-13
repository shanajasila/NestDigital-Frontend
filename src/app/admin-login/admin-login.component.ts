import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  username=""
  Password=""
constructor(private route:Router){}

  readvalues=()=>{
    let log1:any={"username":this.username,"Password":this.Password}
    console.log(log1)
    if(this.username=="admin"&&this.Password=="123") {
    this.route.navigate(["/addemp"])
    
  } else {
    alert("Invalid Credentials")
  }
}
}
