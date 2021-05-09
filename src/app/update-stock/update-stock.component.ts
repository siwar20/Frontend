import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from '../Modele/stock';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent implements OnInit {
  id: number;
  stock: Stock = new Stock();
  constructor(private stockservices: StockService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.stockservices.getStockById(this.id).subscribe(data =>{
      this.stock = data;
    },
    error => console.log(error));
  }
  save(){
    this.stockservices.updateStock(this.id,this.stock).subscribe(data => {
    this.goToStockList();
  },
  error => console.log(error)); 
    
    
  }
  goToStockList(){
    this.router.navigate(['/stock'])
  }

}
