import { UserCocktail } from './../../models/UserCocktail';
import { Cocktail } from 'src/app/models/Cocktail';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardDataService } from 'src/app/services/card-data.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-user-cocktail',
  templateUrl: './user-cocktail.component.html',
  styleUrls: ['./user-cocktail.component.css']
})
export class UserCocktailComponent implements OnInit {
  @Input('cocktail') cocktail?: UserCocktail;

  constructor(
    public activeRouter: ActivatedRoute,
    public router: Router,
    public userdata: UserDataService,
    public cardser: CardDataService
  ) {}

  ngOnInit(): void {}
  navigateToCocktailDetails(coctail:any){
    if (coctail) {
      // console.log(this.recipe , "this recipe from card")
      this.router.navigate([`cocktailDetail` , { data:JSON.stringify(coctail)}]);

  }
  }

  favorate() {
    this.userdata.addFavorateC(this.cocktail?.type as Cocktail);
  }
  deleteCocktail() {
    this.userdata.deleteCocktail(this.cocktail!);
  }
  // navigateToCocktailDetails(coctail:any){
  //   if (coctail) {
  //     this.router.navigate([`cocktailDetail` , { data:JSON.stringify(this.cocktail)}]);

  // }
  // }
}
