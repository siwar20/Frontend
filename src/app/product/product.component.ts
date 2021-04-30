import { Component, OnInit } from '@angular/core';
import { Product } from '../Modele/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  Productlist: Product[];
  constructor() { }

  ngOnInit(): void {
    this.Productlist = [
      {id:  1,  dateExp:123456789, code_a_barre:21615489876},
      {id:  2,  dateExp:123456789, code_a_barre:21615489876},
      {id:  3,  dateExp:123456789, code_a_barre:21615489876},
      {id:  4,  dateExp:123456789, code_a_barre:21615489876}
    ];
  }
  

}
