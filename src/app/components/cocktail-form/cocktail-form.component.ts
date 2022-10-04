import { Cocktail } from 'src/app/models/Cocktail';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
  styleUrls: ['./cocktail-form.component.css']
})
export class CocktailFormComponent implements OnInit {
  cocktailForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.maxLength(15)]),
    ingredients: new FormArray([]),
    instructions: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required]),
  });

  constructor(public dialog: MatDialog ,public userSer:UserDataService) {
    this.addNewIngredient()
  }

  ngOnInit(): void {
  }
  close() {
    this.dialog.closeAll();
  }
  creatCocktail(){
    if (this.cocktailForm.status == 'VALID') {
      const cocktail:Cocktail={
        name:this.cocktailForm.value.name,
        instructions:this.cocktailForm.value.instructions,
        ingredients:this.getIngredientsArrayValues(),
        image:this.cocktailForm.value.imageUrl,

      }
       this.userSer.addCocktail(cocktail);
      this.dialog.closeAll();
      this.userSer.showTostersuccess("Cocktail Added Successfully");

    }else{
      this.userSer.showTostererror("Plese enter all value");

    }
  }
  addNewIngredient(){
    (this.cocktailForm.get('ingredients') as FormArray).push(new FormGroup({
      ingredientItem: new FormControl('', Validators.required)
  }));
  }
  getIngredientsArray() {
    const array = this.cocktailForm.get('ingredients') as FormArray;
    return array.controls as FormGroup[];
  }
  getIngredientsArrayValues() {
    const arr: string[] = [];
    for (let item of this.getIngredientsArray()) {
      arr.push(item.value.ingredientItem);
    }
    return arr;
  }
}
