import { FavoriteC } from './../../models/FavoriteC';
import { FavoriteR } from './../../models/FavoriteR';
import { UserDataService } from './../../services/user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorate-page',
  templateUrl: './favorate-page.component.html',
  styleUrls: ['./favorate-page.component.css'],
})
export class FavoratePageComponent implements OnInit {
  recipeFav: FavoriteR[] = [];
  cocktail?: FavoriteC[] = [];
  typeFavorate:string ="All"
  constructor(public userDs: UserDataService) {
   userDs.getFavorateR().subscribe((params) => {
      this.recipeFav = params;
    });
      userDs.getFavorateC().subscribe((params) => {
      this.cocktail = params;
    });
  }

  ngOnInit(): void {

  }
  filter(filterValue: string) {
    switch (filterValue) {
        case 'recipe':
            const rsub = this.userDs.getFavorateR().subscribe(favorites => {
              this.recipeFav =favorites;
              this.cocktail =[];
              this.typeFavorate ="recipe"
                rsub.unsubscribe();
            });
            break;
        case 'cocktail':
            const csub = this.userDs.getFavorateC().subscribe(favorites => {
              this.cocktail =favorites;
              this.recipeFav =[];
              this.typeFavorate ="cocktail"

                csub.unsubscribe();
            });
            break;
        default:
           this.userDs.getFavorateC().subscribe(favorites => {
            this.cocktail =favorites
            this.typeFavorate ="All"

            csub.unsubscribe();
        });
         this.userDs.getFavorateR().subscribe(favorites => {
          this.recipeFav = favorites;
          rsub.unsubscribe();
      });
            break;
    }
}
}
