import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    UserComentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
