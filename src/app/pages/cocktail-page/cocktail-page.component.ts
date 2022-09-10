import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktail-page',
  templateUrl: './cocktail-page.component.html',
  styleUrls: ['./cocktail-page.component.css']
})
export class CocktailPageComponent implements OnInit {

  constructor() { }
  items? =[1,1,1,1,2,2,2,2,2,2,2]
  ngOnInit(): void {
  }

}
