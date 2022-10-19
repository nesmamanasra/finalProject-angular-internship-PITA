// import { UserRecipe } from './../../models/UserRecipe';
// import { UserDataService } from '../../services/user-data.service';
// import { RecipeFormComponent } from './../../components/recipe-form/recipe-form.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecipeFormComponent } from 'src/app/components/recipe-form/recipe-form.component';
import { UserRecipe } from 'src/app/models/UserRecipe';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-user-recipe-page',
  templateUrl: './user-recipe-page.component.html',
  styleUrls: ['./user-recipe-page.component.css'],
})
export class UserRecipePageComponent implements OnInit {
  userRecipe?: UserRecipe[];
  constructor(public dialog: MatDialog, public userservice: UserDataService) {
    userservice.getUserRecipe().subscribe((params) => {
      this.userRecipe = params;
    });
  }

  ngOnInit(): void {}
  openDialog() {
    this.dialog.open(RecipeFormComponent);
  }
}
