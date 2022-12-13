import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

   empcode=""
   empname=""
  designation=""
   contact=""
   email=""
  username=""
   password=""

   constructor(private api:ApiService){}

   readValues=()=>{
    let data={"empcode":this.empcode,"empname":this.empname,"designation":this.designation,"email":this.email,"contact":this.contact,"username":this.username,"password":this.password}
    console.log(data)
    this.api.addemployee(data).subscribe(
      (response)=>{
        console.log(response)
      }
    )
  }

}
