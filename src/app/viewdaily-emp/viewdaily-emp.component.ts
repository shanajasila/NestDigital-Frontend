import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewdaily-emp',
  templateUrl: './viewdaily-emp.component.html',
  styleUrls: ['./viewdaily-emp.component.css']
})
export class ViewdailyEmpComponent {
 
  date=""

  data:any=[]
  constructor(private api:ApiService){}
  readValues=()=>{
    let data:any={"date":this.date}
    console.log(data)
    this.api.dailyemplog(data).subscribe(
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