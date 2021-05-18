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
export class CagnotteService {
  private baseUrl = 'http://localhost:8035';

  constructor(private http: HttpClient) { }

  
  GetCharts(): Observable<any> {
    return this.http.get(this.baseUrl + '/Cagnotte', {});
  }

  addChart(owner,money, idEvent ): Observable<any> {

    return this.http.post(this.baseUrl + '/saveDon', {
      owner: owner,
      money: money,
    
      idEvent: idEvent

    }, httpOptions);
  }

  DeleteChart(id): Observable<any> {
    return this.http.delete(this.baseUrl + '/deleteCagnotte/' + id, {});
  }


  GetSumCharts(): Observable<any> {
    return this.http.get(this.baseUrl + '/EventSum', {});
  }
}
