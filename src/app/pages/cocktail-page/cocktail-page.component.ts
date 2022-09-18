import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/models/Cocktail';
import { Recipe } from 'src/app/models/Recipe';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cocktail-page',
  templateUrl: './cocktail-page.component.html',
  styleUrls: ['./cocktail-page.component.css'],
})
export class CocktailPageComponent implements OnInit {
  recipes?: Recipe[];
  cocktail?: Cocktail[];
  Imge: any;
  constructor(private ApiFood: ApiService) {
    ApiFood.getImge('cocktail').subscribe(
      (params) => {
        console.log(params, 'this is imge ');
        this.Imge = params;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    this.ApiFood.getCocktailByName('apple').subscribe(
      (params) => {
        this.cocktail = params as Cocktail[];
        console.log(this.cocktail, 'this is test ');
        for (let i =0; i <= this.cocktail.length;i++) {
         this.cocktail[i] ={
          name:this.cocktail[i].name,
          ingredients :this.cocktail[i].ingredients,
          instructions  : this.cocktail[i].instructions,
          image : this.Imge.results[i].urls.small_s3,

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
   this.ApiFood.getImge(recipeName.recipeName.value+" cocktail").subscribe(
      (params) => {
        console.log(params, 'this is imge ');
        this.Imge = params;
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(recipeName.recipeName.value);
    this.ApiFood.getCocktailByName(recipeName.recipeName.value).subscribe(
      (params) => {
        this.cocktail = params as Cocktail[];
        console.log(this.cocktail, 'this is test ');
        for (let i =0; i <= this.cocktail.length;i++) {
         this.cocktail[i] ={
          name:this.cocktail[i].name,
          ingredients :this.cocktail[i].ingredients,
          instructions  : this.cocktail[i].instructions,
          image : this.Imge.results[i].urls.small_s3,

         };

        }
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  }
}
