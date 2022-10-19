// import { UserRecipe } from './../../models/UserRecipe';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/models/Recipe';
import { UserRecipe } from 'src/app/models/UserRecipe';
import { CardDataService } from 'src/app/services/card-data.service';
import { UserDataService } from 'src/app/services/user-data.service';
// import { CardDataService } from '../../services/card-data.service';
// import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-user-recipe',
  templateUrl: './user-recipe.component.html',
  styleUrls: ['./user-recipe.component.css'],
})
export class UserRecipeComponent implements OnInit {
  @Input('recipees') recipees?: UserRecipe;

  constructor(
    public activeRouter: ActivatedRoute,
    public router: Router,
    public userdata: UserDataService,
    public cardser: CardDataService
  ) {}

  ngOnInit(): void {}
  navigateToRecipeDetails(recipe: any) {
    if (recipe) {
      this.router.navigate([
        `itemDetail`,
        { data: JSON.stringify(this.recipees?.type) },
      ]);
    }
  }

  favorate() {
    this.userdata.addFavorate(this.recipees?.type as Recipe);
  }
  deleteRecipe() {
    this.userdata.deleteRecipe(this.recipees!);
  }
}
