import { Category } from "./category";
import { Image } from "./image";


export class Product {
    id:number;
    product_name:string;
    dateExp:number;
    product_price:number;
    code_a_barre:number;
    category?: Category;
    image?:Image;
}