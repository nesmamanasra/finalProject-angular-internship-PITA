import { Recipe } from './../../models/Recipe';
import { ApiService } from './../../services/api.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {
  recipes?:Recipe[];
  Image:any
  recipeName?:string
  searshresult?:string ='Food'
   constructor( private ApiFood:ApiService) {
    ApiFood.getImge('food').subscribe(
      (params) => {
        console.log(params, 'this is imge ');
        this.Image = params;
      },
      (error) => {
        console.log(error);
      }
    );
  }

 ngOnInit(): void {
  this.ApiFood.getRecipeByName('apple').subscribe(
    (params) => {
      this.recipes = params as Recipe[];
      for (let i =0; i <= this.recipes.length;i++) {
       this.recipes[i] ={
        title:this.recipes[i].title,
        servings:this.recipes[i].servings,
        ingredients :this.recipes[i].ingredients,
        instructions  : this.recipes[i].instructions,
        image : this.Image.results[i].urls.small_s3,

       };

      }

    },
    (error) => {
      console.log(error);
      return null;
    }
  );
  }

  searsh(recipeName: any) {
    this.searshresult = this.recipeName

    this.ApiFood.getImge(recipeName.recipeName.value+" food").subscribe(
       (params) => {
         this.Image = params;
       },
       (error) => {
         console.log(error);
       }
     );
     console.log(recipeName.recipeName.value);
     this.ApiFood.getRecipeByName(recipeName.recipeName.value).subscribe(
       (params) => {
         this.recipes = params as Recipe[];
         for (let i =0; i <= this.recipes.length;i++) {
          this.recipes[i] ={
           title:this.recipes[i].title,
           ingredients :this.recipes[i].ingredients,
           servings:this.recipes[i].servings,
           instructions  : this.recipes[i].instructions,
           image : this.Image.results[i].urls.small_s3,

          };

         }

       },
       (error) => {
         console.log(error);
         return null;
       }
     );
     this.recipeName = ''
   }
}
