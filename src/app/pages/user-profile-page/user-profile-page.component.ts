import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css']
})
export class UserProfilePageComponent implements OnInit {
user?:User
  constructor(private ApiService:ApiService, public AuthService:AuthService) {
   this.ApiService.getRecipeByName("fish");
   this.ApiService.getCocktailByName("apple");
   this.user = this.AuthService.userActive()
  }

  ngOnInit(): void {
  }

}
