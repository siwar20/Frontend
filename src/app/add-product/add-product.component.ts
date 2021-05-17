import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl} from '@angular/forms';
import { Product } from '../Modele/Product';
import { ProductService } from '../services/product.service';
import { Category } from '../Modele/category';
import { CategoryService } from '../services/category.service';
import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { Image } from '../Modele/image';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product : Product = new Product();
   list : Product[];
   categorylist: Category[];
   category;

  constructor(private productservices: ProductService, 
    private router: Router, private httpClient: HttpClient,
    private categoryservice: CategoryService) { }
    selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  image: any;
  picture: any;
  

  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
    console.log('********* this.selectedFile: ',this.selectedFile)
  }
  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
   
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile);
    
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post(`http://localhost:9890/api/image/upload`, uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        console.log('*********response: ', response);
        console.log('*********response: ', response.body);
        console.log('**********image: ', this.image);
        if (response.status === 201) {
          this.message = 'Image uploaded successfully';
          this.picture = response.body;
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );
  }
    //Gets called when the user clicks on retieve image button to get the image from back end
    getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get(`http://localhost:9890/api/image/get/` + this.image)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }


  ngOnInit(): void {
    this.product = new Product();
    this.list = [];
    console.log(this.list);
    this.categoryservice.findAll().subscribe(data => {
      this.categorylist = data;
    });
  }

  saveProduct(){
    console.log('********picture: ' ,this.picture);
    this.product.image = new Image();
    this.product.image.id = this.picture.id;
    this.productservices.addProduct(this.product).subscribe(data => {
      console.log(data);
     
      this.goToProductList();
    },
    error => console.log(error)); 
  }

  goToProductList(){
    this.router.navigate(['/product'])
  
  }
  

 

}
