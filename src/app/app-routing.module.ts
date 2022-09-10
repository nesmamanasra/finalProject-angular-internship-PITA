import { ItemDetailsComponent } from './pages/item-details/item-details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RecipePageComponent } from './pages/recipe-page/recipe-page.component';
import { CocktailPageComponent } from './pages/cocktail-page/cocktail-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'cocktailPage',component:CocktailPageComponent},
  {path:'recipePage',component:RecipePageComponent},
  {path:'itemDetail',component:ItemDetailsComponent},
  {path:'',component:HomePageComponent},
  {path:'**',component:HomePageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
