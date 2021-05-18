import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EventService {
  admin=true;
  private baseUrl = 'http://localhost:8035';

  constructor(private http: HttpClient) { }

  
  GetEvents(): Observable<any> {
    return this.http.get(this.baseUrl + '/Events', {});
  }

  GetEventById(id){
    return this.http.get(this.baseUrl + '/event/' + id);
  }

  addEvent(name,lieu, dateEvent, budget ,video ): Observable<any> {

    return this.http.post(this.baseUrl + '/saveEvent', {
      name: name,
      dateEvent: dateEvent,
      budget: budget,
      lieu: lieu,
      video:video

    }, httpOptions);
  }

  DeleteEvent(id): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + id, {});
  }
}
