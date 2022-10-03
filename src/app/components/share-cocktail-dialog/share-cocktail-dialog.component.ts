import { Cocktail } from 'src/app/models/Cocktail';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Recipe } from 'src/app/models/Recipe';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-share-cocktail-dialog',
  templateUrl: './share-cocktail-dialog.component.html',
  styleUrls: ['./share-cocktail-dialog.component.css']
})
export class ShareCocktailDialogComponent implements OnInit {
  users?: User[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: Cocktail,public authserv: AuthService, public dialog: MatDialog,public userService:UserDataService) {
    this.users = authserv.getAllUser();
  }

  ngOnInit(): void {}
  share(user: User) {
    this.dialog.closeAll();
    this.userService.addShareC(user,this.data)
  }
}
