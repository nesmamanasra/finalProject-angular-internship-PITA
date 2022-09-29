import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { RecipePageComponent } from './pages/recipe-page/recipe-page.component';
import { CocktailPageComponent } from './pages/cocktail-page/cocktail-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NgImageSliderModule } from 'ng-image-slider';
import { SwiperModule } from 'swiper/angular';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';
import { UserComentComponent } from './components/user-coment/user-coment.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTooltipModule } from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UserRecipePageComponent } from './pages/user-recipe-page/user-recipe-page.component';
import { UserCocktailPageComponent } from './pages/user-cocktail-page/user-cocktail-page.component';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';
import { CoctailCardComponent } from './components/coctail-card/coctail-card.component';
import { FavoratePageComponent } from './pages/favorate-page/favorate-page.component';
import { SugesstPageComponent } from './pages/sugesst-page/sugesst-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { CocktailDetailsComponent } from './pages/cocktail-details/cocktail-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemCardComponent,
    RecipePageComponent,
    CocktailPageComponent,
    HomePageComponent,
    FooterComponent,
    ItemDetailsComponent,
    UserComentComponent,
    StarRatingComponent,
    UserRecipePageComponent,
    UserCocktailPageComponent,
    UserProfilePageComponent,
    CoctailCardComponent,
    FavoratePageComponent,
    SugesstPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ContactPageComponent,
    CocktailDetailsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatToolbarModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
