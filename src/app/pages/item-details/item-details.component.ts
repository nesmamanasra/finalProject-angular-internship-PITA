import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  coments?=[1,2,2,3,3,44,,4]
  constructor() { }

  ngOnInit(): void {
  }

}
