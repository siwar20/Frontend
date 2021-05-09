import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../Modele/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category : Category = new Category();
  list : Category[];
  constructor(private categoryservices: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.category = new Category();
    this.list = [];
    console.log(this.list);
  }
  sevaCategory(){
    this.categoryservices.addCategory(this.category).subscribe(data => {
      console.log(data);
      this.goToCategoryList();
    },
    error => console.log(error)); 
  }

  goToCategoryList(){
    this.router.navigate(['/Category'])
  }

  save(){
    
    console.log(this.category);
    this.sevaCategory();
  }


}
