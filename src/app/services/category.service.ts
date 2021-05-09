import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../Modele/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseURL = "http://localhost:8888/api/category/Category"
  constructor(private httpclient: HttpClient) { }

  getCategoryList(): Observable<Category[]>{
    return this.httpclient.get<Category[]>(this.baseURL);
}
addCategory(category: Category): Observable<Object>{
  return this.httpclient.post(`http://localhost:9800/api/category/add/Category`, category)
}
getCategoryById(id:number) : Observable<Category>{
  return this.httpclient.get<Category>(`${this.baseURL}/${id}`);
  
  }
updateCategory(id:number, category:Category): Observable<Object>{
    return this.httpclient.put(`http://localhost:9800/api/category/update/Category`, category);
  }
  
deleteCategory(id: number): Observable<object>{
    return this.httpclient.delete(`${this.baseURL}/${id}`);
  
  }

}
