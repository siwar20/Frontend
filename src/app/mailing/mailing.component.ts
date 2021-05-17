import { Component, OnInit } from '@angular/core';
import { Mailing } from '../Modele/mailing';
import { MailingService } from '../services/mailing.service';

@Component({
  selector: 'app-mailing',
  templateUrl: './mailing.component.html',
  styleUrls: ['./mailing.component.css']
})
export class MailingComponent implements OnInit {
mail:Mailing = new Mailing();
  constructor(private mailingservice: MailingService) { }

  ngOnInit(): void {
  }

}
