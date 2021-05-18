import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private eventService : EventService) { }

  ngOnInit(): void {
  }

  
  changeToAdmin(){

    this.eventService.admin =true

  }
  changeToUser(){

    this.eventService.admin =false

  }

}
