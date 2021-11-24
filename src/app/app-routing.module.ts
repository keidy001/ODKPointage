import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './Utilisateur/list-users/list-users.component';
import { AddUsersComponent } from './Utilisateur/add-users/add-users.component';
import { AddAdminComponent } from './Admin/add-admin/add-admin.component';
import { ListAdminComponent } from './Admin/list-admin/list-admin.component';
import { PromoComponent } from './promotion/promo/promo.component';
import { ListePromoComponent } from './promotion/liste-promo/liste-promo.component';
const routes: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'login',component: LoginComponent},
  { path: 'listUsers',component:ListUsersComponent},
  { path: 'addUsers', component:AddUsersComponent},
  { path: 'addAdmin', component:AddAdminComponent},
  { path: 'promo', component:PromoComponent},
  { path: 'listepromo', component:ListePromoComponent},
  { path: 'listAdmins', component: ListAdminComponent},
  { path: '', redirectTo: '/login', pathMatch:'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
