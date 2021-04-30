import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Modele/Product';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-add-update-product',
  templateUrl: './add-update-product.component.html',
  styleUrls: ['./add-update-product.component.css'],
  providers: [ProductService]
})
export class AddUpdateProductComponent implements OnInit {

  product: Product ;
  route: any;
  constructor(
    private productservices: ProductService
  ) {this.product= new Product(); }

  ngOnInit(): void {
  }

  saveOrUpdate() {
    if (this.product.id !== undefined) {
     this.productservices.update(this.product).subscribe(result => {

       console.log(result);
 
       Swal.fire(
         'Bravo!',
         'Produit '+this.product.desigProduit+' modifié avec succès!',
         'success'
       );
 
       this.gotoProductList();
 
     })
   } else {
     this.productservices.create(this.product).subscribe(result => {

       console.log(result);
 
       Swal.fire(
         'Bravo!',
         'Produit enregistré avec succès!',
         'success'
       );
 
       this.gotoProductList();
 
     })
   }
}


 gotoProductList() {
   this.route.navigate(['/Product/all']);
 }
}
