import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Modele/Product';
import { ProductService } from '../services/product.service';




@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  searchValue:string;
  product: Product[];

  constructor(private productservices: ProductService,
    private router: Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.getProduct();
    this.http.get('http://localhost:9800/api/product/Product/find').subscribe((result :any)=>{
  this.product=result;
});
  }
  private getProduct(){
    this.productservices.getProductList().subscribe(data =>{
      this.product = data;

    });
  }

  updateProduct(id:number){
    this.router.navigate(['update-product', id]);

  }
  deleteProduct(id: number){
    this.productservices.deleteProduct(id).subscribe(data =>{
      console.log(data);
      this.getProduct();
    })
  }

}
