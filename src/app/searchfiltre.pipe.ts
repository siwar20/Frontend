import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './Modele/Product';

@Pipe({
  name: 'searchfiltre'
})
export class SearchfiltrePipe implements PipeTransform {

  transform(Products: Product[],searchValue:string):Product[] {
    if(!Products || !searchValue){
      return Products;
    }
     return Products.filter(product=>
       product.product_name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
       
       );
   }
}
