import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  g?: string;
  gender: string[] = ['Femail', 'Mail'];
  registerForm: FormGroup;
  errorMessage: string = '';
  errorsMap = [
    { value: 'First Name is required', key: 'fname' },
    { value: 'Last Name is required', key: 'lname' },
    { value: 'Email is required', key: 'email' },
    { value: 'password Name is required', key: 'password' },
    { value: 'addres Name is required', key: 'addres' },
    { value: 'age Name is required', key: 'age' },
    { value: 'gender Name is required', key: 'gender' },
    { value: 'imgUrl Name is required', key: 'imgUrl' },
  ];
  constructor(
    public fb: FormBuilder,
    public auths: AuthService,
    public route: Router,
    public toast: ToastrService
  ) {
    this.registerForm = this.fb.group({
      fname: [, Validators.required],
      lname: [, Validators.required],
      email: [, [Validators.required, Validators.email]],
      password: [, Validators.required],
      addres: [, Validators.required],
      age: [, Validators.required],
      gender: [, Validators.required],
      imgUrl: [, Validators.required],
    });
  }

  ngOnInit(): void {}
  creatUser() {
    console.log(this.registerForm);
    if (this.registerForm.status == 'VALID') {
      let fname = this.registerForm.value.fname;
      let lname = this.registerForm.value.lname;
      let age = this.registerForm.value.age;
      let gender = this.registerForm.value.gender;
      let email = this.registerForm.value.email;
      let password = this.registerForm.value.password;
      let img = this.registerForm.value.imgUrl;
      let address = this.registerForm.value.address;

      const newUser = new User(
        fname,
        lname,
        email,
        password,
        gender,
        address,
        age,
        img
      );
      this.auths.creatUser(newUser);
      this.route.navigate(['login']);
    } else {
      this.errorMessage = this.registerForm.getError('fname');
      this.toast.warning(`plese Check Your Data `, '', {
        timeOut: 2000,
        positionClass: 'toast-custom',
      });
    }
  }
}

/*

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup = new FormGroup({
        firstName: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(30),
        ]),
        lastName: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(30),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        gender: new FormControl('', [Validators.required]),
        age: new FormControl(null, [
            Validators.required,
            Validators.min(13),
            Validators.max(80),
        ]),
        password: new FormControl(null, [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(15),
        ]),
    });

    constructor(public auth: AuthService, private userService: UserService, public route: Router) {
    }

    ngOnInit() {
    }
    register() {
        const newUser: IUser = {
            id: '',
            first_name: this.registerForm.value.firstName,
            last_name: this.registerForm.value.lastName,
            DOB: this.registerForm.value.age,
            gender: this.registerForm.value.gender,
            email: this.registerForm.value.email,
        }

        this.auth.register(newUser.email, this.registerForm.value.password).then(res => {
            this.userService.saveUserInfo(newUser).then(res => {
                console.log(res);
                this.route.navigate(['/home'])
            }).catch(err => {
                console.log(err);
            })
        }).catch(err => {
            console.log(err);
        })
    }

    goToLogin(){
      this.route.navigate(['/login'])
    }
}

*/
