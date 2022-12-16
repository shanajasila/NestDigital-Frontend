import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave-requests',
  templateUrl: './leave-requests.component.html',
  styleUrls: ['./leave-requests.component.css']
})
export class LeaveRequestsComponent {
  
  constructor(private api:ApiService){
    api.fetchRequest().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
 data:any=[]
  statusvalue:any={}

  acceptvalue=(data:any)=>{

    this.statusvalue=1;

    let accept:any={"empid":data,"status":this.statusvalue}

    this.api.updatestatus(accept).subscribe(

      (response:any)=>{

        if (response.status=="success") {

          console.log(response)

          console.log(response.status)
          alert("success")
          window.location.reload()
        } else {

          alert("failed")
         }

      }

    )

  }
  
  rejectvalue=(data:any)=>{

    this.statusvalue=-1;

    let reject:any={"empid":data,"status":this.statusvalue}

    this.api.updatestatus(reject).subscribe(

      (response:any)=>{

        if (response.status=="success") {

          console.log(response)

          console.log(response.status)
           alert("success")
           window.location.reload()
        } else {

          alert("failed")
         }

      }

    )

  }
  
}
