import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-cocktail-page',
  templateUrl: './user-cocktail-page.component.html',
  styleUrls: ['./user-cocktail-page.component.css']
})
export class UserCocktailPageComponent implements OnInit {
  items? =[1,1,1,1,2,2,2,2,2,2,2]

  constructor() { }

  ngOnInit(): void {
  }

}
