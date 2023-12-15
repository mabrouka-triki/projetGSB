import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { GsbLoginService } from './gsb-login.service';
import { Frais } from "./modeles/frais";

@Injectable({
  providedIn: 'root'
})
export class GsbFraisService {
  private _reponses = new BehaviorSubject<Frais[]>([]);
  readonly appels_termines = this._reponses.asObservable();
  public listeFrais: Frais[] = [];

  constructor(private http: HttpClient, private gsb_api: GsbLoginService) { }

  listeFraisDuVisiteur() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.gsb_api.recupereBearer()
    });

    this.http.get<Frais[]>(
      'http://localhost/api/ProjetWSGSB/public/api/listeFrais/' + this.gsb_api.visiteurId(),
      { headers: headers }
    ).subscribe(
      data => {
        this.listeFrais = data;
        this._reponses.next(this.listeFrais);
      },
      error => console.log('Erreur appel API', error)
    );
  }
}
