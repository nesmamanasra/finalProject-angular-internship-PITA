import { CocktailFormComponent } from './../../components/cocktail-form/cocktail-form.component';
import { UserCocktail } from './../../models/UserCocktail';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-user-cocktail-page',
  templateUrl: './user-cocktail-page.component.html',
  styleUrls: ['./user-cocktail-page.component.css'],
})
export class UserCocktailPageComponent implements OnInit {
  userCocktail?: UserCocktail[];

  constructor(public dialog: MatDialog, public userservice: UserDataService) {
    userservice.getUserCocktail().subscribe((params) => {
      this.userCocktail = params;
    });
  }

  ngOnInit(): void {}
  openDialog() {
    this.dialog.open(CocktailFormComponent);
  }
}
