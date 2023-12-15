import {Visiteur} from "./visiteur";


export class Login {

  visiteur: Visiteur;
  access_token: string;
  token_type: string;

  constructor(json?: any) {
    if (json) {
      this.visiteur = json.visiteur;
      this.access_token = json.access_token;
      this.token_type = json.token_type;
    } else {
      this.visiteur = new Visiteur();
      this.access_token = "";
      this.token_type = "";
    }
  }
}
