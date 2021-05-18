import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CagnotteService } from '../services/cagnotte.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-cagnotte',
  templateUrl: './cagnotte.component.html',
  styleUrls: ['./cagnotte.component.css']
})
export class CagnotteComponent implements OnInit {

  constructor(private eventService : EventService,
    private canService: CagnotteService,
    private router : Router
  ) { }
  sum:any
  charts : any;
  myvar :any;
  ngOnInit(): void {
    this.myvar = this.eventService.admin
    this.getCharts()
    this.getSumCharts()

    
  }


  getCharts(){
    this.canService.GetCharts().subscribe(data=>{
      this.charts = data
      console.log(this.charts);
      
    })
  }

  addCagnotte()
  {
    this.router.navigate(['Add-Chart'])
  }


  delete(id){
    this.canService.DeleteChart(id).subscribe();
  setTimeout(() => {
    this.getCharts();
  }, 500);
  
  }

  getSumCharts(){
    this.canService.GetSumCharts().subscribe(data=>{
      this.sum = data
      console.log(this.sum);
      
    })
  }
  
}
