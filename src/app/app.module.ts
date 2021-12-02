import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './Utilisateur/list-users/list-users.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListAdminComponent } from './Admin/list-admin/list-admin.component';
import { AddAdminComponent } from './Admin/add-admin/add-admin.component';
import { UpdateAdminComponent } from './Admin/update-admin/update-admin.component';
import { AddUsersComponent } from './Utilisateur/add-users/add-users.component';
import { DetailUserComponent } from './listUsers/detail-user/detail-user.component';
import { UpdateUserComponent } from './Utilisateur/update-user/update-user.component';
import { FooterComponent } from './footer/footer.component';
import { AddPromotionComponent } from './promotion/add-promotion/add-promotion.component';
import { UpdatePromotionComponent } from './promotion/update-promotion/update-promotion.component';
import { DetailPromotionComponent } from './promotion/detail-promotion/detail-promotion.component';
import { ListePromotionComponent } from './promotion/liste-promotion/liste-promotion.component';
import { ListPointageComponent } from './PointageAdministrateur/list-pointage/list-pointage.component';
import { DetailPointageComponent } from './PointageAdministrateur/detail-pointage/detail-pointage.component';
import { DatePipe } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ConfirmationDialogComponent } from './confirmationDialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './confirmationDialog/confirmation-dialog.service';
import { UserSpaceComponent } from './user-space/user-space.component';
import { ProfileComponent } from './profile/profile.component';
import { ListelogComponent } from './log/listelog/listelog.component';
import { LogParUtilisateurComponent } from './log/logUtilisateur/log-par-utilisateur/log-par-utilisateur.component';
import { LogParAdminComponent } from './log/logAdmin/log-par-admin/log-par-admin.component';
import { LogParSuperAdminComponent } from './log/logSuper/log-par-super-admin/log-par-super-admin.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';





@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    ListUsersComponent,
    ListAdminComponent,
    AddAdminComponent,
    UpdateAdminComponent,
    AddUsersComponent,
    DetailUserComponent,
    UpdateUserComponent,
    FooterComponent,
    AddPromotionComponent,
    UpdatePromotionComponent,
    DetailPromotionComponent,
    ListePromotionComponent,
    ListPointageComponent,
    DetailPointageComponent,
    ConfirmationDialogComponent,
    UserSpaceComponent,
    ProfileComponent,
    ListelogComponent,
    LogParUtilisateurComponent,
    LogParAdminComponent,
    LogParSuperAdminComponent,
    ProfileUserComponent,
    
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,

    
    

  
  ],
  providers: [
    DatePipe,
    
    ConfirmationDialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
