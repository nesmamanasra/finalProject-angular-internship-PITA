import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {

  constructor() { }
  items? =[1,2,,3,,4,3,3,,,]
  ngOnInit(): void {
  }

}
