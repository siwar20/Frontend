import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mailing } from '../Modele/mailing';
import { Rayon } from '../Modele/rayon';
import { MailingService } from '../services/mailing.service';
import { RayonService } from '../services/rayon.service';

@Component({
  selector: 'app-rayon-list',
  templateUrl: './rayon-list.component.html',
  styleUrls: ['./rayon-list.component.css']
})
export class RayonListComponent implements OnInit {
  rayon : Rayon[];
  mail : Mailing = new Mailing();
  constructor(private rayonservices : RayonService, private router: Router,
   private mailservices: MailingService) { }

  ngOnInit(): void {
    this.getRayon();
    this.mail.name = "siwar" 
    this.mail.email = "saidsaidsaid123456789012@gmail.com"
    this.mail.feedback = "" 
  }

  private getRayon(){
    this.rayonservices.getRayonList().subscribe(data =>{
      this.rayon = data;

    });

  }
  saveMail(){
    this.mailservices.createMail(this.mail).subscribe(data =>{
      console.log(data)
      
    },
    error => console.log(error))
  }
  sendmail(){
    console.log(this.mail)
    this.saveMail()
  }

}
