import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  myvar :any
  display = false;
  constructor( private eventService : EventService,
               private router : Router
    ) { }

 
 events : any;
  ngOnInit(): void {
    
    this.getEvents()
    this.myvar = this.eventService.admin
    
  }


  getEvents(){
    this.eventService.GetEvents().subscribe(data =>{
      this.events = data
      console.log(this.events);
      
    })
  }



  addEvent()
  {
    this.router.navigate(['Add-Event'])
  }

  gotoTrailer(id){
    this.router.navigate(['Event/' + id])
  }




delete(id){
  this.eventService.DeleteEvent(id).subscribe();
setTimeout(() => {
  this.getEvents();
}, 500);

}






  
}



