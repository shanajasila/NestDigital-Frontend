import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewstatus',
  templateUrl: './viewstatus.component.html',
  styleUrls: ['./viewstatus.component.css']
})
export class ViewstatusComponent {

  
empid:any=""
searchData:any=[]
constructor(private api:ApiService){
  this.empid=localStorage.getItem("userInfo")
    api.fetchRequest().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )

}

view=()=>
{
  let data:any={"empid":this.empid}
  console.log(data)
  this.api.searchStatus(data).subscribe(
    (response:any)=>
    {
     this.searchData=response
      
    }
  )
}
data:any=[]
}

