// import { AuthService } from '../../services/auth.service';
// import { ApiService } from './../../services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import {ApiService}from 'src/app/services/api.service'
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css'],
})
export class UserProfilePageComponent implements OnInit {
  user?: User;
  userImge?: string;
  constructor(private ApiService: ApiService, public AuthService: AuthService) {
    this.ApiService.getRecipeByName('fish');
    this.ApiService.getCocktailByName('apple');
    this.user = this.AuthService.userActive();
    this.userImge = this.user?.imgUrl;
  }

  ngOnInit(): void {}
}
