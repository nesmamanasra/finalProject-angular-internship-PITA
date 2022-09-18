import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorate-page',
  templateUrl: './favorate-page.component.html',
  styleUrls: ['./favorate-page.component.css']
})
export class FavoratePageComponent implements OnInit {
  items? =[1,1,1,1,2,2,2,2,2,2,2]
  constructor() { }

  ngOnInit(): void {
  }

}
