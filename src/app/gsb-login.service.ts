import { Injectable } from '@angular/core';
import {Login} from "./metier/login";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Visiteur} from "./metier/visiteur";

@Injectable({
  providedIn: 'root'
})
export class GsbLoginService {

  private login: Login = new Login;
  constructor(private http: HttpClient, private router: Router) { }

  serviceEnvoieLogin(login: string, password: string){

    const requestObject = new Visiteur({"login": login, "password": password});
    return this.http.post<Login>('http://localhost/ProjetWSGsb/public/api/listeFrais/1', requestObject).
      subscribe(
        data => {
          this.login = new Login(data);
          this.router.navigate(['/frais/liste']);
        },

      error => console.log('Erreur appel API')
    );

  }


  visiteurId(): number {
    return this.login.visiteur.id_visiteur;
  }

  recupererBearer() {
    return this.login.access_token;
  }
}
