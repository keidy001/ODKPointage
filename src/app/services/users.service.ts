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

     //-------------------------------------------------------Login APi service --------------

     login1(login :String,password : String){
      return this.http.get(this.url+"/admin/authentificationAdmin?login="+login+"&password="+password)
    }

    login2(login :String,password : String){
      return this.http.get(this.url+"/utilisateurs/login?login="+login+"&password="+password)
    }
    //-------------------------------------------------------Admin  APi service --------------

    getAllAdmin(){
      return this.http.get(this.url+"/admin/afficher_List_admin");
    }

    addAdmin(data:any){
    
      return this.http.post(this.url+"/admin/ajout_admin/"+data.userId, data, {responseType:"text"});
    }

    deleteAdmin(id:any, userId:number){
        return this.http.delete(this.url+"/admin/supprimerAdmin/"+id+"&"+userId,{responseType:'text'});
    }
    detailAdmin(id:any){
      return this.http.get(this.url +"/admin/afficherAdminById/"+ id);
    }
    updateAdmin(id: number, userId:number, data: any){
      return this.http.put(this.url+"/admin/modifierAdmin/"+id+"&"+userId, data);
    }


    //-------------------------------------------------------Users APi service --------------

    getAllUsers(){
      return this.http.get(this.url+"/utilisateurs/afficher_list_utilisateur");
    }

    addUsers(data:any){
      
      return this.http.post(this.url+"/utilisateurs/ajout_utilisateur/"+data.userId, data, {responseType:"text"});
    }

    deleteUser(id:any, userId:number){
      return this.http.delete(this.url+"/utilisateurs/supprimerUser/"+id+"&"+userId,{responseType:'text'});
  }

  
  detailUser(id:any){
    return this.http.get(this.url +"/utilisateurs/afficher_by_id/"+ id);
  }

updateUser(id: number, userId:number, data: any){
 
  return this.http.put(this.url+"/utilisateurs/modifier_utilisateur/"+id+"&"+userId, data);
}



 //-------------------------------------------------------Promotions APi service --------------

getAllPromotions(){
  return this.http.get(this.url+"/promotion/afficherpromotion");
}

addPromotion(data:any){
    
  return this.http.post(this.url+"/promotion/ajouter/"+data.userId, data, {responseType:"text"});
}

deletePromotion(id:any, userId:number){
  return this.http.delete(this.url+"/promotion/supprimer/"+id+"&"+userId,{responseType:'text'});
}

detailPromotion(id:any){
  return this.http.get(this.url +"/promotion/afficherparid/"+ id);
}

updatePromotion(id: number, userId:number, data: any){

return this.http.put(this.url+"/promotion/modifier/"+id+"&"+userId, data);
}
//GET pointage by day
AllPointageAdmin(){
  return this.http.get(this.url+"/pointage/listPointage");
}
detailPointageAdmin(id:any){
  return this.http.get(this.url +"/pointage/afficherPointage/"+ id);
}

listParJour(day:any){
  return this.http.get(this.url+"/pointage/pointageByDay/date="+day)
}
listParSemaine(week:any){
  return this.http.get(this.url+"/pointage/pointageByWeek/week="+week)
}
listParMois(month:any){
  return this.http.get(this.url+"/pointage/pointageByMonth/month="+month)
}



 //-------------------------------------------------------Logs APi service --------------

getAlllog(){
  
  return this.http.get(this.url+"/log/listeLog");
}
getLogParActeur(id : number,acteur: any){
  return this.http.get(this.url+"/log/afficherParActeur/"+id+"&"+acteur);
}
afficherListPointage(){   return this.http.get(this.url+("/pointage/listPointage")); }
}