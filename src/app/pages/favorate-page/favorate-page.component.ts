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
  constructor(public userDs: UserDataService) {}

  ngOnInit(): void {
    this.userDs.getFavorateR().subscribe((params) => {
      this.recipeFav = params as FavoriteR[];
    });
    this.userDs.getFavorateC().subscribe((params) => {
      this.cocktail = params as FavoriteC[];
    });
  }
}
