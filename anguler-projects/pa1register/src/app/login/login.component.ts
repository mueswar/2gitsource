import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLogin= true;

  isNewUser(){
    console.log('new user?');
    this.isLogin = !this.isLogin;
  }
  getData(form:NgForm){
    console.log(form.value.email);
    console.log(form.value.password);
  }
}
