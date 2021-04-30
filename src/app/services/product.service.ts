import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Product } from '../Modele/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private resourceUrl: string;
  constructor(protected http: HttpClient) {
    this.resourceUrl =  'https://github.com/siwar20/consomi_tounsi.git';
   }
   create(product: Product) {
    return this.http.post<Product>(this.resourceUrl, product);

}

update(product: Product)  {
    return this.http.put<Product>(this.resourceUrl, Product);
}

findOne(id: number) : Observable<Product> {
    return this.http.get<Product>(`${this.resourceUrl}/${id}`);
}

public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.resourceUrl);
  }


delete(id: number)  {
    return this.http.delete<Product>(`${this.resourceUrl}/${id}`);
}
}
