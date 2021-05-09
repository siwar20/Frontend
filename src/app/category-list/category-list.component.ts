import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/Modele/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  category: Category[];
  constructor(private categoryservices: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.getCategory();
  }
private getCategory(){
  this.categoryservices.getCategoryList().subscribe(data =>{
    this.category = data;

  });
}
go(){
  this.router.navigate(['add-category' ]);

}
updateCategory(id:number){
  this.router.navigate(['update-category', id]);

}
deleteCategory(id: number){
  this.categoryservices.deleteCategory(id).subscribe(data =>{
    console.log(data);
    this.getCategory();
  })
}
}
