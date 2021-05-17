import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rayon } from '../Modele/rayon';
import { RayonService } from '../services/rayon.service';

@Component({
  selector: 'app-add-rayon',
  templateUrl: './add-rayon.component.html',
  styleUrls: ['./add-rayon.component.css']
})
export class AddRayonComponent implements OnInit {
  rayon : Rayon = new Rayon();
  list : Rayon[];
  constructor(private rayonservices : RayonService, private router: Router) { }

  ngOnInit(): void {
    this.rayon = new Rayon();
    this.list = [];
    console.log(this.list);
  }
  sevaRayon(){
    this.rayonservices.addRayon(this.rayon).subscribe(data => {
      console.log(data);
      this.goToRayonList();
    },
    error => console.log(error)); 
  }

  goToRayonList(){
    this.router.navigate(['/rayon'])
  }

  save(){
    
    console.log(this.rayon);
    this.sevaRayon();
  }
}
