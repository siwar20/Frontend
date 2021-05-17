import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../Modele/category';
import { CategoriesmockService } from '../services/categoriesmock.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  category;
  categorie;
  listCategory: Category[];
  constructor(private categorieservice: CategoriesmockService, 
    private categoryService : CategoryService,
     private router : Router) { }

  ngOnInit(): void {
    this.categorieservice.getCategories().subscribe(data=>{
      this.category = data;
   },err=>{
     console.log("Erreur retourne : ",err);
   });

    this.findAllCategories()
  }
  findAllCategories() {
    this.categoryService.getCategoryList()
      .pipe()
      .subscribe(data => {
        console.log("Category from database : ",data);
        this.listCategory = data;
      }, error => {
        console.log(error);
      });
  }

  detailCategorie(id:number){

  	 this.categorieservice.getCategorie(id).subscribe(data=>{
        this.categorie = data;

        let nomCategorie : string = this.categorie.nom;

        switch (nomCategorie) {
    case 'FOOD':
        this.router.navigate(["/food",id]);
        break;
    case 'CLOTHING':
        this.router.navigate(["/clothing",id]);
        break;
    
    default:
        console.log("No categorie exists!");
        break;
	}

     },err=>{
     	console.log("Erreur retourne categorie choisie : ",err);
     });

  }
  


}
