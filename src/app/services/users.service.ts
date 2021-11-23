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

    deleteAdmin(id:any){
        return this.http.delete(this.url+"/admin/supprimerAdmin/"+id,{responseType:'text'});
    }
  }