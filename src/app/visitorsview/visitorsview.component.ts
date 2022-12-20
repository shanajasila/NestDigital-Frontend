import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-visitorsview',
  templateUrl: './visitorsview.component.html',
  styleUrls: ['./visitorsview.component.css']
})
export class VisitorsviewComponent {
  id=""
  date=""
  entry_datetime=""
  exit_datetime=""
  name=""
  whomtomeet=""
  purpose=""

  constructor(private api:ApiService){
    api.viewvisitorlog().subscribe(
      (response)=>{
        this.visitor=response
      }
    )
  }
visitor:any=[]
}
