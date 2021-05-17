import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/Modele/category';
import { Product } from 'src/app/Modele/Product';
import { CategoriesmockService } from 'src/app/services/categoriesmock.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  id:number;
  foodCategorie={};
  categorieTrouve;
  product:Product[];
  searchValue:string;
  category;
  catgory?:Category;
  produit:Product;
  show:boolean;
  
  constructor(private route:ActivatedRoute, private productservice: ProductService,
     private router :Router, 
    private categorieService: CategoriesmockService) { }

  ngOnInit(): void {
    
    this.getProduct();
    this.foodProduct(this.product);
    this.id=+this.route.snapshot.params['id'];
  	this.categorieService.getCategorie(this.id).subscribe(data=>this.foodCategorie=data);
  }

  private getProduct(){
    
    this.productservice.getProductList().subscribe(data=>{
          this.product=data;
          
    })
  }
  processReq(message: any){
    console.log("message du composant fils cote pere :",message);
     this.categorieService.getCategoriesByNom(message).subscribe(
       data=>{
       this.categorieTrouve=data;
       let url :string = "/"+this.categorieTrouve[0].nom.toLowerCase();
       let id :number = this.categorieTrouve[0].id;
        this.router.navigate([url,id]);
     },err=>{
         console.log("erreur obtenue :",err);
     });
     

  }
  
  foodProduct(produit:Product[]){
    if (this.produit.category.name == 'food'){
      this.show = false
    }else {
      this.show = true
    }

  }
}
