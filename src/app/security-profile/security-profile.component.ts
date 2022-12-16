import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-profile',
  templateUrl: './security-profile.component.html',
  styleUrls: ['./security-profile.component.css']
})
export class SecurityProfileComponent {

  code=""
  securityname=""
  contactno=""


userId:any=""
constructor(private api:ApiService){
  this.userId=localStorage.getItem("userInfo")
  let data:any={"id":this.userId}
  this.api.viewprofile(data).subscribe(
    (response)=>{
      console.log(response)
      this.data=response

    }
  )
}
data:any=[]
}
