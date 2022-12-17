import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewlog',
  templateUrl: './viewlog.component.html',
  styleUrls: ['./viewlog.component.css']
})
export class ViewlogComponent {
  empcode=""
  date=""
  entry_datetime=""
  exit_datetime=""
  name=""
  whomtomeet=""
  purpose=""


  constructor(private api:ApiService){
    api.viewemplog().subscribe(
      (response)=>{
        this.employee=response
      }
    )
  }
employee:any=[]

}
