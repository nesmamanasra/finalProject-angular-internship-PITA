// import { AuthService } from './../../services/auth.service';
// import { ShareR } from './../../models/shareR';
// import { UserDataService } from '../../services/user-data.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { ShareC } from 'src/app/models/shareC';
import { ShareR } from 'src/app/models/shareR';
import { AuthService } from 'src/app/services/auth.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-sugesst-page',
  templateUrl: './sugesst-page.component.html',
  styleUrls: ['./sugesst-page.component.css'],
})
export class SugesstPageComponent implements OnInit {
sugesstR?:ShareR[];
sugesstC?:ShareC[];
typesugesst: string = 'All';

user:User;
  constructor(public dataServ:UserDataService,auths:AuthService) {
    this.user  = auths.userActive();

  dataServ.getShareR(this.user).subscribe((params) => {
    this.sugesstR=params
  });
    dataServ.getShareC(this.user).subscribe((params) => {
      this.sugesstC=params
    });

  }

  ngOnInit(): void {}

  filter(filterValue: string) {
    switch (filterValue) {
      case 'recipe':
        this.dataServ.getShareR(this.user).subscribe((params) => {
          this.sugesstR=params;
          this.sugesstC =[];
          this.typesugesst ="recipe"
        });
        break;
      case 'cocktail':
        this.dataServ.getShareC(this.user).subscribe((params) => {
          this.sugesstC=params;
          this.sugesstR =[];
          this.typesugesst ="cocktail"

        });
        break;
      default:
       this.dataServ.getShareC(this.user).subscribe((params) => {
          this.sugesstC=params
        });
        this.dataServ.getShareR(this.user).subscribe((params) => {
          this.sugesstR=params;
          this.typesugesst ="All"

        });
        break;
    }
  }
}
