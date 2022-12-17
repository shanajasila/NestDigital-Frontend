import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-visitorslog',
  templateUrl: './visitorslog.component.html',
  styleUrls: ['./visitorslog.component.css']
})
export class VisitorslogComponent {
  name=""
  whomtomeet=""
  date=""
  entry_datetime=""
  exit_datetime=""
  purpose=""

  constructor(private api:ApiService){}
  readValue=()=>
  {
    let data:any={"name":this.name,"date":this.date,"entry_datetime":this.entry_datetime,"exit_datetime":this.exit_datetime,"purpose":this.purpose,"whomtomeet":this.whomtomeet}
    console.log(data)
    this.api.addVisitorslog(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("successfully added")
          this.date=""
          this.entry_datetime=""
          this.exit_datetime=""
          this.name=""
          this.purpose=""
          this.whomtomeet=""
        } else {
          alert("wrong data")
        }
      }
    )
  }
}
