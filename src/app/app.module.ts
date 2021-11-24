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
import { PromoComponent } from './promotion/promo/promo.component';
import { ListePromoComponent } from './promotion/liste-promo/liste-promo.component';



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
    PromoComponent,
    ListePromoComponent,
 
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
