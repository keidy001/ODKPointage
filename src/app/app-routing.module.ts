import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { SupAdmComponent } from './sup-adm/sup-adm.component';
const routes: Routes = [
  { path: 'accueil', component: AccueilComponent}, 
  { path: 'SupAdm', component: SupAdmComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
