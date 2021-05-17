import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rayon } from '../Modele/rayon';

@Injectable({
  providedIn: 'root'
})
export class RayonService {
  private baseURL = "http://localhost:9890/api/rayon/Rayon"
  constructor(private httpclient: HttpClient) { }

  getRayonList(): Observable<Rayon[]>{
    return this.httpclient.get<Rayon[]>(this.baseURL);
  }
  addRayon(rayon: Rayon): Observable<Object>{
    return this.httpclient.post(this.baseURL, rayon)
}
}
