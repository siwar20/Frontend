import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Modele/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-gestion-product',
  templateUrl: './gestion-product.component.html',
  styleUrls: ['./gestion-product.component.css']
})
export class GestionProductComponent implements OnInit {
  product:Product[];
  searchValue:string;
  constructor(private productservice: ProductService, private router:Router) { }

  ngOnInit(): void {
    this.getProduct();
  }
  private getProduct(){
    this.productservice.getProductList().subscribe(data=>{
          this.product=data;
          
    })
  }
}
