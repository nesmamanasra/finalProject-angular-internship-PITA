import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(public auths: AuthService, public router: Router,public toast:ToastrService) {
  }
  
  ngOnInit(): void {}
  login(log: any) {
    let email = log.value.email;
    let password = log.value.password;
    if (this.auths.getUser(email, password) == null) {
      // alert('User Namer or password have error ');
    } else {
      this.router.navigate(['']);
    }
  }
}
