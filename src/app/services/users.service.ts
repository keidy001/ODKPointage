import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url='http://localhost:8080/api';
  

  constructor(
    private http : HttpClient)
     { }
    getAllAdmin(){
      return this.http.get(this.url+"/admin/afficher_List_admin");
    }

    addAdmin(data:any){
      return this.http.post(this.url+"/admin/ajout_admin", data, {responseType:"text"});
    }

    deleteAdmin(id:any){
        return this.http.delete(this.url+"/admin/supprimerAdmin/"+id,{responseType:'text'});
    }
    detailAdmin(id:any){
      return this.http.get(this.url +"/admin/afficherAdminById/"+ id);
    }
    updateAdmin(id: number, data: any){
      return this.http.put(this.url+"/admin/modifierAdmin/"+ id, data);
    }


    //-------------------------------------------------------Users APi service --------------

    getAllUsers(){
      return this.http.get(this.url+"/utilisateurs/afficher_list_utilisateur");
    }

  }
