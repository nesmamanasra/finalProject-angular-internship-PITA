import { UserRecipe } from './../../models/UserRecipe';
import { UserDataService } from 'src/app/services/user-data.service';
import { RecipeFormComponent } from './../../components/recipe-form/recipe-form.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-recipe-page',
  templateUrl: './user-recipe-page.component.html',
  styleUrls: ['./user-recipe-page.component.css'],
})
export class UserRecipePageComponent implements OnInit {
  items? = [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2];
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
