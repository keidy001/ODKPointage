import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-log-par-utilisateur',
  templateUrl: './log-par-utilisateur.component.html',
  styleUrls: ['./log-par-utilisateur.component.css']
})
export class LogParUtilisateurComponent implements OnInit {
  logUtilisateur :any
  id=1;
  acteur="UTILISATEUR";

  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.logParUtilisateur();
  }
  logParUtilisateur(){
    this.acteur=this.acteur
    this.id=this.id
    this.service.getLogParActeur(this.id,this.acteur).subscribe((data)=>{
      this.logUtilisateur= data;
      console.log(data)
    })
    
  }

}
