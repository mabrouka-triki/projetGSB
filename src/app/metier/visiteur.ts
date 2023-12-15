export class Visiteur {

  public id_visiteur: number = 0;
  public nom_visiteur: string = "";
  public prenom_visiteur: string = "";
  public type_visiteur: string = "";
  public email: string = "";
  public password: string = "";

  constructor(json?: any) {
    if (json) {
      this.id_visiteur = json.id_visiteur;
      this.nom_visiteur = json.nom_visiteur;
      this.prenom_visiteur = json.prenom_visiteur;
      this.type_visiteur = json.type_visiteur;
      this.email = json.email;
      this.password = json.password;
    }
  }
}
