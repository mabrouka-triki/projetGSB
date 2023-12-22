import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {GsbLoginService} from "../gsb-login.service";



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login: FormControl= new FormControl('');

  password: FormControl= new FormControl('');

  showPassword: boolean =false;

  showText: boolean = false;


  constructor(private loginService: GsbLoginService) {
  }

  onSubmit(){
    this.loginService.serviceEnvoieLogin(
      this.login.value,
      this.password.value
    );
  }

  voirMdp(){
    this.showPassword = !this.showPassword;
    const  passwordInput = document.getElementById('password') as HTMLInputElement;
    passwordInput.type = this.showPassword ? 'text' : 'password';
  }
}

