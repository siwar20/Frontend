import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mailing } from '../Modele/mailing';

@Injectable({
  providedIn: 'root'
})
export class MailingService {
private baseMailURL = "http://localhost:9890/feedback"
  constructor(private httpclient : HttpClient) { }

  createMail(mail: Mailing):Observable<Object>{
    return this.httpclient.post(`${this.baseMailURL}`,mail)
  }
}
