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
  massegeErr(massege: string) {
    this.errorMessage = massege;
  }
  massegeError() {
    if (
      this.registerForm.get('fname')?.invalid &&
      this.registerForm.get('fname')?.touched
    ) {
      this.errorMessage = 'First Name is required ';
    } else if (
      this.registerForm.get('lname')?.invalid &&
      this.registerForm.get('lname')?.touched
    ) {
      this.errorMessage = 'Last Name is required ';
    } else if (
      this.registerForm.get('email')?.invalid &&
      this.registerForm.get('email')?.touched
    ) {
      this.errorMessage = 'Email invalid ';
    } else if (
      this.registerForm.get('password')?.invalid &&
      this.registerForm.get('password')?.touched
    ) {
      this.errorMessage = 'Password is required ';
    } else if (
      this.registerForm.get('addres')?.invalid &&
      this.registerForm.get('addres')?.touched
    ) {
      this.errorMessage = 'Addres is required ';
    } else if (
      this.registerForm.get('gender')?.invalid &&
      this.registerForm.get('gender')?.touched
    ) {
      this.errorMessage = 'gender is required ';
    } else if (
      this.registerForm.get('age')?.invalid &&
      this.registerForm.get('age')?.touched
    ) {
      this.errorMessage = 'Age is required ';
    } else if (
      this.registerForm.get('imgUrl')?.invalid &&
      this.registerForm.get('imgUrl')?.touched
    ) {
      this.errorMessage = 'ImageUrl is required ';
    } else {
      this.errorMessage = '';
    }
  }
}
