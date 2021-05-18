import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent implements OnInit {
id:any
currentRate = 3.14;
event: any
  constructor(
    private eventService : EventService,
               private router : Router,
               private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
this.id = this.route.snapshot.params['id'];
this.getEventById()
  }



  getEventById(){
    this.eventService.GetEventById(this.id).subscribe(data=>{
this.event = data
console.log(data);

    })
  }

  addCagnotte()
  {
    this.router.navigate(['Add-Chart'])
  }
  gotoList(){
    this.router.navigate(['/Events'])
  }

}
