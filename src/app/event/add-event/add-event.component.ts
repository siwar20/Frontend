import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
form :any ={};
videoId:any
eve:any
  constructor(
    private eventService: EventService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  //this.form.name,this.form.location,this.form.date_event,this.form.budget

  onSubmit(){
    this.videoId = this.form.video.replace('https://www.youtube.com/watch?v=','')
    this.eventService.addEvent(this.form.name,this.form.lieu,this.form.dateEvent,this.form.budget,this.videoId)
    .subscribe(data => {
this.eve =data
    })
    alert("added successfully")
    this.gotoList()
    
  }

  gotoList(){
    this.router.navigate(['/Events'])
  }

  

}
