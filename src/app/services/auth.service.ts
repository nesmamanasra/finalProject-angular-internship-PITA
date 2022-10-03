import { ToastrService } from 'ngx-toastr';
import { User } from './../models/User';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginStat: boolean = false;
  static user = '';

  constructor(public toast: ToastrService) {
    AuthService.user =
      JSON.parse(localStorage.getItem('userActive') as string) || [];
  }

  getUser(email: string, password: string) {
    let users = JSON.parse(localStorage.getItem('Users') as string) || [];
    for (let user of users) {
      if (user.email == email && user.password == password) {
        this.loginStat = true;
        localStorage.setItem('loginUser', JSON.stringify(this.loginStat));
        localStorage.setItem('userActive', JSON.stringify(user));

        AuthService.user = user;
        this.toast.success(`${user.fname}  ${user.lname}`, 'Welcome', {
          timeOut: 2000,
          positionClass: 'toast-custom',
        });
        return user;
      }
    }

    this.toast.error('User name or password have error', '', {
      timeOut: 2000,
      positionClass: 'toast-custom',
    });
    return null;
  }
  userActive() {
    return (AuthService.user =
      JSON.parse(localStorage.getItem('userActive') as string) || []);
  }
  creatUser(user: User) {
    let users = JSON.parse(localStorage.getItem('Users') as string) || [];
    const newUser = new User(
      user.fname,
      user.lname,
      user.email,
      user.password,
      user.gender,
      user.address,
      user.age,
      user.imgUrl
    );
    users.push(newUser);
    this.toast.success(
      `${newUser.fname}  ${newUser.lname} `,
      'Welcom Plese login',
      {
        timeOut: 2000,
        positionClass: 'toast-custom',
      }
    );
    localStorage.setItem('Users', JSON.stringify(users));
  }
  islogin(): Observable<boolean> {
    const st = Boolean(localStorage.getItem('loginUser') as string) || false;

    if (st == true) {
      this.loginStat = true;
      return of((this.loginStat = true));
    } else {
      this.loginStat = false;
      return of((this.loginStat = false));
    }
  }
  setoginstatus() {
    const st = Boolean(localStorage.getItem('loginUser') as string) || false;

    if (st == true) {
      this.loginStat = true;
      return (this.loginStat = true);
    } else {
      this.loginStat = false;
      return (this.loginStat = false);
    }
  }
  getAllUser() {
    let otheruser: User[] = [];
    const user: User = this.userActive();
    let users: User[] =
      JSON.parse(localStorage.getItem('Users') as string) || [];
    for (let u of users) {
      if (user.fname != u.fname && user.lname != u.fname) {
        otheruser.push(u);
      }
    }

    return otheruser;
  }
}
