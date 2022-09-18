import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sugesst-page',
  templateUrl: './sugesst-page.component.html',
  styleUrls: ['./sugesst-page.component.css']
})
export class SugesstPageComponent implements OnInit {
  items? =[1,1,1,1,2,2,2,2,2,2,2]

  constructor() { }

  ngOnInit(): void {
  }

}
