import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CocktailDetailsComponent } from './pages/cocktail-details/cocktail-details.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FavoratePageComponent } from './pages/favorate-page/favorate-page.component';
import { SugesstPageComponent } from './pages/sugesst-page/sugesst-page.component';
import { Recipe } from './models/Recipe';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';
import { UserRecipePageComponent } from './pages/user-recipe-page/user-recipe-page.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RecipePageComponent } from './pages/recipe-page/recipe-page.component';
import { CocktailPageComponent } from './pages/cocktail-page/cocktail-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCocktailPageComponent } from './pages/user-cocktail-page/user-cocktail-page.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'cocktailPage',component:CocktailPageComponent},
  {path:'recipePage',component:RecipePageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'itemDetail',component:ItemDetailsComponent},
  {path:'cocktailDetail',component:CocktailDetailsComponent},
  {path:'userRecipe',component:UserRecipePageComponent, canActivate: [AuthGuard]},
  {path:'userCocktail',component:UserCocktailPageComponent, canActivate: [AuthGuard]},
  {path:'userProfile',component:UserProfilePageComponent, canActivate: [AuthGuard]},
  {path:'sugest',component:SugesstPageComponent, canActivate: [AuthGuard]},
  {path:'favorate',component:FavoratePageComponent, canActivate: [AuthGuard]},
  {path:'contact',component:ContactPageComponent},

  {path:'**',component:NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
