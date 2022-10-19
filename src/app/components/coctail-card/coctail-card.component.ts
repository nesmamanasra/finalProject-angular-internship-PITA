import { CardDataService } from 'src/app/services/card-data.service';
import { Router } from '@angular/router';
// import { Cocktail } from './../../models/Cocktail';
import { Component, Input, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { Cocktail } from 'src/app/models/Cocktail';
// import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-coctail-card',
  templateUrl: './coctail-card.component.html',
  styleUrls: ['./coctail-card.component.css']
})
export class CoctailCardComponent implements OnInit {
  @Input('coctail')  coctail?:Cocktail;
  status:boolean = false;
  constructor(public router:Router,public userdata:UserDataService,public cardser:CardDataService) {

  }

  ngOnInit(): void {

  }
  navigateToCocktailDetails(coctail:any){
    if (coctail) {
      // console.log(this.recipe , "this recipe from card")
      this.router.navigate([`cocktailDetail` , { data:JSON.stringify(this.coctail)}]);

  }
  }
  favorate(){
    this.userdata.addFavorateC(this.coctail as Cocktail);
    this.status=!this.status
    console.log(this.status)
  }
  }

