import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.css']
})
export class LeaveApplicationComponent {
  empcode=""
  empname=""
  leavetype=""
  reason=""
  fromdate=""
  todate=""
constructor(private api:ApiService){}
readvalues=()=>{
  let data={"empcode":this.empcode,"empname":this.empname,"leavetype":this.leavetype,"reason":this.reason,"fromdate":this.fromdate,"todate":this.todate}

  this.api.applyLeave(data).subscribe(
    (response)=>{
      console.log(response)
    }
  )

}
}
