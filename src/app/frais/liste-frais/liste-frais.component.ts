import { Component } from '@angular/core';
import {GsbFraisService} from "../../gsb-frais.service";
import {MenuComponent} from "../../menu/menu.component";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-liste-frais',
  standalone: true,
  imports: [
    MenuComponent,
    AsyncPipe
  ],
  templateUrl: './liste-frais.component.html',
  styleUrl: './liste-frais.component.css'
})
export class ListeFraisComponent {
constructor(private frais_api: GsbFraisService) {
  this.frais_api.listeFraisDuVisiteur();
}

  getListeFrais(): Observable<any[]> {
    return this.frais_api.appels_termines;
  }
}
