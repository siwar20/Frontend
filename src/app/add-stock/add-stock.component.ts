import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from '../Modele/stock';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
  stock : Stock = new Stock();
  list : Stock[];
  constructor(private stockservices : StockService, private router: Router) { }

  ngOnInit(): void {
    this.stock = new Stock();
    this.list = [];
    console.log(this.list);
  }
  sevaStock(){
    this.stockservices.addStock(this.stock).subscribe(data => {
      console.log(data);
      this.goToStockList();
    },
    error => console.log(error)); 
  }

  goToStockList(){
    this.router.navigate(['/Stock'])
  }

  save(){
    
    console.log(this.stock);
    this.sevaStock();
  }


}
