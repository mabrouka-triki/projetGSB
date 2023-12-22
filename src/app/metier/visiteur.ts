export class Visiteur {
  public id_visiteur: number = 0;
  public nom_visiteur: string = "";
  public prenom_visiteur: string = "";
  public type_visiteur: string = "";
  public login: string = "";
  public password: string = "";

  constructor(json?: any) {
    if (json) {
      this.id_visiteur = json.id_visiteur !== undefined ? json.id_visiteur : 0;
      this.nom_visiteur = json.nom_visiteur || "";
      this.prenom_visiteur = json.prenom_visiteur || "";
      this.type_visiteur = json.type_visiteur || "";
      this.login = json.login || "";
      this.password = json.password || "";
    }
  }
}
