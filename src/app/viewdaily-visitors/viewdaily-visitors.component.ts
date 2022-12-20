import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewdaily-visitors',
  templateUrl: './viewdaily-visitors.component.html',
  styleUrls: ['./viewdaily-visitors.component.css']
})
export class ViewdailyVisitorsComponent {
  date=""

  data:any=[]
  constructor(private api:ApiService){}
  readValues=()=>{
    let data:any={"date":this.date}
    console.log(data)
    this.api.dailyvisitorslog(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length==0){
          alert("date is doesnt match")
          this.date=""
        }
        else{
          this.data=response
          
        }
      }
    )
  }
}
