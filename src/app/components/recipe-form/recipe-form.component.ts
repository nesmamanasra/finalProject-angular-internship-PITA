// import { UserDataService } from '../../services/user-data.service';
import { Recipe } from 'src/app/models/Recipe';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class RecipeFormComponent implements OnInit {
  recipeForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required,Validators.maxLength(15)]),
    ingredients: new FormControl('', [Validators.required]),
    servings: new FormControl('', [Validators.required,Validators.maxLength(15)]),
    instructions: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required]),
  });

  constructor(public dialog: MatDialog ,public userSer:UserDataService) {}

  ngOnInit(): void {}
  close() {
    this.dialog.closeAll();
  }
  creatRecipe(){
    if (this.recipeForm.status == 'VALID') {
      const recipe:Recipe={
        title:this.recipeForm.value.title,
        instructions:this.recipeForm.value.instructions,
        ingredients:this.recipeForm.value.ingredients,
        servings:this.recipeForm.value.servings,
        image:this.recipeForm.value.imageUrl,
      }

      this.userSer.addRicepe(recipe);
      this.dialog.closeAll();
      this.userSer.showTostersuccess("Recipe Added Successfully");

    }else{
      this.userSer.showTostererror("Plese enter all value");

    }
  }
}
