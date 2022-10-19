// import { Recipe } from './../../models/Recipe';
// import { UserDataService } from '../../services/user-data.service';
import { Component, Inject, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
// import { AuthService } from '../../services/auth.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Recipe } from 'src/app/models/Recipe';
import { AuthService } from 'src/app/services/auth.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.css'],
})
export class ShareDialogComponent implements OnInit {
  users?: User[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: Recipe,public authserv: AuthService, public dialog: MatDialog,public userService:UserDataService) {
    this.users = authserv.getAllUser();
  }

  ngOnInit(): void {}
  share(user: User) {
    this.dialog.closeAll();
    this.userService.addShareR(user,this.data)
  }
}
