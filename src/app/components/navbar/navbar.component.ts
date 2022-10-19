import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  loginState: boolean = false;
  user?: User;
  constructor(public auths: AuthService, public route: Router) {}

  ngOnInit(): void {
    this.auths.islogin().subscribe((data) => {
      this.loginState = data;
    });
    this.user = this.auths.userActive();
  }

  logOut() {
    localStorage.removeItem('loginUser');
    this.route.navigate(['login']);
  }
}
