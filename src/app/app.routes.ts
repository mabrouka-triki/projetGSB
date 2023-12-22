import { Routes } from '@angular/router';
import {ListeFraisComponent} from "./frais/liste-frais/liste-frais.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'frais/liste', component: ListeFraisComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'}

];
