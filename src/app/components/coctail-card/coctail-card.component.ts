import { Router } from '@angular/router';
import { Cocktail } from './../../models/Cocktail';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coctail-card',
  templateUrl: './coctail-card.component.html',
  styleUrls: ['./coctail-card.component.css']
})
export class CoctailCardComponent implements OnInit {
  @Input('coctail')  coctail?:Cocktail;

  constructor(public router:Router) {

  }

  ngOnInit(): void {

  }
  navigateToCocktailDetails(coctail:any){
    if (coctail) {
      console.log(coctail + "this recipe from card")
      this.router.navigate([`itemDetail/${this.coctail}`]);

  }
  }
}
