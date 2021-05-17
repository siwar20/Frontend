import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Product } from '../Modele/Product';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL = "http://localhost:9890/api/product/product"
 
  constructor(private httpclient: HttpClient) {}
getProductList(): Observable<Product[]>{
    return this.httpclient.get<Product[]>(this.baseURL);
}
addProduct(product: Product): Observable<Object>{
  
  return this.httpclient.post(this.baseURL, product)
}
/*public addImage(selectedFile:File, id:number):Observable<File>{
  // const url ='http://localhost:8083/image/upload/'
   const uploadImageData = new FormData();
   uploadImageData.append('imageFile', selectedFile, selectedFile.name)
   return this.httpclient.post<File>(`http://localhost:9890/api/image/upload/${id}`,uploadImageData);
 }*/
getProductById(id:number) : Observable<Product>{
return this.httpclient.get<Product>(`${this.baseURL}/${id}`);

}
updateProduct(id:number, product:Product): Observable<Object>{
  return this.httpclient.put(`http://localhost:9890/api/product/Product`, product);
}

deleteProduct(id: number): Observable<object>{
  return this.httpclient.delete(`${this.baseURL}/${id}`);

}
}