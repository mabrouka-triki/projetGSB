import { Component } from '@angular/core';
import {GsbFraisService} from "../../gsb-login.service";
import {MenuComponent} from "../../menu/menu.component";

@Component({
  selector: 'app-liste-frais',
  standalone: true,
  imports: [
    MenuComponent
  ],
  templateUrl: './liste-frais.component.html',
  styleUrl: './liste-frais.component.css'
})
export class ListeFraisComponent {


constructor(private frais_api: GsbFraisService) {

}

getListeFrais() {

  return this.frais_api.appels_termines;
}
}



