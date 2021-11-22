import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url='http://localhost:8080/api/admin';
  

  constructor(
    private http : HttpClient) { }
    getAllAdmin(){
      return this.http.get(this.url+"/afficherListadmin");
    }
}
