import { User } from './../models/User';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginStat:boolean = false;
  static user = '';

  constructor() {
    AuthService.user = JSON.parse( localStorage.getItem("userActive") as string)||[];

  }

  getUser(email:string,password:string){
    let users =JSON.parse( localStorage.getItem("Users") as string)||[];
    for( let user of users){
      if(user.email == email && user.password == password){
        this.loginStat = true;
        localStorage.setItem("loginUser",JSON.stringify(this.loginStat));
        // this.loginStat  = this.islogin();
        localStorage.setItem("userActive",JSON.stringify(user));

        AuthService.user = user;
        console.log(AuthService.user,"this user login ");
          return user;
      }else{
        alert("email Or pasword have error");
        return null;
      }
    }
  }
  userActive(){
   return AuthService.user = JSON.parse( localStorage.getItem("userActive") as string)||[];

  }
  creatUser(user:User){
    let users =JSON.parse( localStorage.getItem("Users") as string)||[];
    console.log("user From service ",user);
    const  newUser = new User(user.fname,user.lname,user.email,user.password,user.gender,user.address,user.age,user.imgUrl);
    users.push(newUser);
    localStorage.setItem("Users",JSON.stringify(users));
  }
  islogin(): Observable<boolean>{
  const st =Boolean( localStorage.getItem("loginUser") as string) || false

    if(st==true){

      this.loginStat=true
    return of( this.loginStat=true)
    }else{
      this.loginStat = false
    return  of(this.loginStat = false)
    }

  }
  setoginstatus(){
    const st =Boolean( localStorage.getItem("loginUser") as string) || false

    if(st==true){

      this.loginStat=true
    return this.loginStat=true
    }else{
      this.loginStat = false
    return  this.loginStat = false
   }

}
}
