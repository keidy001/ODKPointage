import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './Utilisateur/list-users/list-users.component';
import { AddUsersComponent } from './Utilisateur/add-users/add-users.component';
import { AddAdminComponent } from './Admin/add-admin/add-admin.component';
import { ListAdminComponent } from './Admin/list-admin/list-admin.component';
import { DetailAdminComponent } from './Admin/detail-admin/detail-admin.component';
import { UpdateAdminComponent } from './Admin/update-admin/update-admin.component';
import { DetailUserComponent } from './listUsers/detail-user/detail-user.component';
import { UpdateUserComponent } from './Utilisateur/update-user/update-user.component';
import { GuardGuard } from './guard.guard';
import { AddPromotionComponent } from './promotion/add-promotion/add-promotion.component';
import { ListePromotionComponent } from './promotion/liste-promotion/liste-promotion.component';
import { DetailPromotionComponent } from './promotion/detail-promotion/detail-promotion.component';
import { UpdatePromotionComponent } from './promotion/update-promotion/update-promotion.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'login',component: LoginComponent},
  { path: 'listUsers',component:ListUsersComponent},
  { path: 'addUsers', component:AddUsersComponent},
  { path: 'addAdmin',component:AddAdminComponent},
  { path: 'addPromotion',component:AddPromotionComponent},
  {path: 'listPromotion',component:ListePromotionComponent},
  {path: 'detailPromotion/:id',component:DetailPromotionComponent},
  {path: 'updatePromotion/:id',component:UpdatePromotionComponent},
  { path: 'detailAdmin/:id',component:DetailAdminComponent},
  { path: 'updateAdmin/:id',component:UpdateAdminComponent},
  { path: 'detailUser/:id',component:DetailUserComponent},
  { path: 'updateUser/:id',component:UpdateUserComponent},
  { path: 'listAdmins', component: ListAdminComponent},
  { path: '**', redirectTo: '/login', pathMatch:'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
