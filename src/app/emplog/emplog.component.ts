import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emplog',
  templateUrl: './emplog.component.html',
  styleUrls: ['./emplog.component.css']
})
export class EmplogComponent {

  empid=""
  date=""
  entry_datetime=""
  exit_datetime=""
constructor(private api:ApiService){}
  readValue=()=>
  {
    let data:any={"empid":this.empid,"date":this.date,"entry_datetime":this.entry_datetime,"exit_datetime":this.exit_datetime}
    console.log(data)
    this.api.addemployeelog(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("successfully added")
          this.date=""
          this.empid=""
          this.entry_datetime=""
          this.exit_datetime=""
        } else {
          alert("wrong data")
        }
      }
    )
  }
}
