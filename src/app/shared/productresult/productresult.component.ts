
import { Categorie } from 'src/app/Modele/categorie';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-productresult',
  templateUrl: './productresult.component.html',
  styleUrls: ['./productresult.component.css']
})
export class ProductresultComponent implements OnInit {
  food = 'FOOD';
	clothing = 'PAINS';
	
	categorieName:string
  constructor() { }
  @Input()
  public result: Categorie;
  @Output()
  sendRequestData = new EventEmitter(); // Emetteur d'évènement

  ngOnInit(): void {
  }
  getCategoryName(catName:string) {
  	console.log("categorie nom cote fils : "+catName);
  	this.sendRequestData.emit(catName);
  }

}
