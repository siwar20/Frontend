import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from '../Modele/stock';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  stock : Stock[];
  constructor(private stockservices : StockService, private router: Router) { }

  ngOnInit(): void {
    this.getStock();
  }

  private getStock(){
    this.stockservices.getStockList().subscribe(data =>{
      this.stock = data;

    });
  }
  updateStock(id:number){
    this.router.navigate(['update-Stock', id]);

  }
  deleteStock(id: number){
    this.stockservices.deleteStock(id).subscribe(data =>{
      console.log(data);
      this.getStock();
    })
  }

}
