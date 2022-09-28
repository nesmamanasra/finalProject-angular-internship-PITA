import { UserDataService } from './../../services/user-data.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/models/Recipe';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  @Input('recipe')  recipe?:Recipe;

  constructor(public activeRouter: ActivatedRoute,public router: Router,public userdata:UserDataService) {

   }

  ngOnInit(): void {

  }
  navigateToRecipeDetails(recipe:any){
    if (recipe) {
      // console.log(this.recipe , "this recipe from card")
      this.router.navigate([`itemDetail` , { data:JSON.stringify(this.recipe)}]);

  }
  }

  favorate(){
    this.userdata.addFavorate(this.recipe as Recipe);
  }
}
