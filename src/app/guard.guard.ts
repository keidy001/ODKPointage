import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(
    private router: Router,
  ){}
  statRoute:any;
  ngOnInit(): void {
    this.statRoute = localStorage.setItem("stateLog", this.statRoute);
  
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
      
      let loginData =localStorage["isLogin"];
      if(loginData){
        this.statRoute = route.url[0].path;
        console.log(this.statRoute);
        return true;
      
      }
      this.router.navigate(["/accueil"]);
    return true;
      this.router.navigate(["/login"]);
      this.router.navigate(["/login"]);
    return false;

  }
  
}
