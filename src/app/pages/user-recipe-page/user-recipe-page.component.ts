import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-recipe-page',
  templateUrl: './user-recipe-page.component.html',
  styleUrls: ['./user-recipe-page.component.css']
})
export class UserRecipePageComponent implements OnInit {
  items? =[1,1,1,1,2,2,2,2,2,2,2]

  constructor() { }

  ngOnInit(): void {
  }

}
