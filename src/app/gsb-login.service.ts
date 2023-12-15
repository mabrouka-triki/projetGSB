
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Login} from "./metier/login";
import {Visiteur} from "./metier/visiteur";


@Injectable({
  providedIn: 'root',
})
export class GsbLoginService {
  private login: Login = new Login();

  constructor(private http: HttpClient, private router: Router) {}

  serviceEnvoieLogin(email: string, password: string) {
    const requestObject = new Visiteur({ email: email, password: password });

    this.http.post<Login>('http://localhost/api/ProjetWSGSB/public/api/login', requestObject).subscribe(
      (data: Login) => {
        this.login = new Login(data);
        this.router.navigate(['/frais/liste']);
      },
      (error) => console.log('Erreur appel API', error)
    );
  }
}
