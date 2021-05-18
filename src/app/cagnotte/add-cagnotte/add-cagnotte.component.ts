import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CagnotteService } from 'src/app/services/cagnotte.service';
import { EventService } from 'src/app/services/event.service';
@Component({
  selector: 'app-add-cagnotte',
  templateUrl: './add-cagnotte.component.html',
  styleUrls: ['./add-cagnotte.component.css']
})
export class AddCagnotteComponent implements OnInit {
  form :any ={};
  eve:any
  events : any;
  constructor(   private canService: CagnotteService,
    private eventService: EventService,
    private router : Router) { }

  ngOnInit(): void {
    this.getEvents()
  }

  getEvents(){
    this.eventService.GetEvents().subscribe(data =>{
      this.events = data
      console.log(this.events);
      
    })
  }

  onSubmit(){
    this.canService.addChart(this.form.owner,this.form.money,this.form.idEvent)
    .subscribe(data => {
this.eve =data
    })
    alert("added successfully")
    this.gotoList()
    
  }

  gotoList(){
    this.router.navigate(['/Charts'])
  }

  

}
