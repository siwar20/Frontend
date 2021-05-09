import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../Modele/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private baseURL = "http://localhost:9800/api/stock/Stocks"

  constructor(private httpclient: HttpClient) { }

  getStockList(): Observable<Stock[]>{
    return this.httpclient.get<Stock[]>(this.baseURL);
}
addStock(stock: Stock): Observable<Object>{
  return this.httpclient.post(this.baseURL, stock)
}
getStockById(id:number) : Observable<Stock>{
return this.httpclient.get<Stock>(`${this.baseURL}/${id}`);

}
updateStock(id:number, stock:Stock): Observable<Object>{
  return this.httpclient.put(`http://localhost:9800/api/stock/update`, stock);
}

deleteStock(id: number): Observable<object>{
  return this.httpclient.delete(`${this.baseURL}/${id}`);

}
}
