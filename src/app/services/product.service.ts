import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Product } from '../Modele/Product';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL = "http://localhost:9800/api/product/product"
 
  constructor(private httpclient: HttpClient) {}
getProductList(): Observable<Product[]>{
    return this.httpclient.get<Product[]>(this.baseURL);
}
addProduct(product: Product): Observable<Object>{
  return this.httpclient.post(this.baseURL, product)
}
getProductById(id:number) : Observable<Product>{
return this.httpclient.get<Product>(`${this.baseURL}/${id}`);

}
updateProduct(id:number, product:Product): Observable<Object>{
  return this.httpclient.put(`http://localhost:9800/api/product/Product`, product);
}

deleteProduct(id: number): Observable<object>{
  return this.httpclient.delete(`${this.baseURL}/${id}`);

}
}