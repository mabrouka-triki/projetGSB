export class Frais {

  public id_frais: number = 0;
  public id_visiteur: number = 0;
  public id_etat: number = 0;
  public anneemois: string= "";
  public nbjustificatifs: number = 0;
  public datemodification: string = "";
  public montantvalide: number = 0;
  public lib_etat: string = "";

  constructor(json? : any) {
    if (json){
      this.id_frais = json.id_frais;
      this.id_visiteur = json.id_visiteur;
      this.id_etat = json.id_etat;
      this.anneemois = json.anneemois;
      this.nbjustificatifs = json.nbjustificatifs;
      this.datemodification = json.datemodification;
      this.montantvalide = json.montantvalide;
      this.lib_etat = json.lib_etat;


    }
  }
}
