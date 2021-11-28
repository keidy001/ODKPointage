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
    ListePromotionComponent
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
