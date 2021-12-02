import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import * as XLSX from 'xlsx';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  fileName = "listeAdmin.xlsx";
  listUsers: any;
  loginData:any;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  searchText:any;
 

>>>>>>> 368b21bd76ce5c7832f661e6cf897db3841a7165
>>>>>>> 0ffe7f28ad1fc09f6c9089ad1e55dc0542972b9f
  constructor(public service: UsersService,
    private router:Router,
    ) { }

  ngOnInit(): void {
    this.listerUsers();
    this.loginData = JSON.parse(localStorage["isLogin"]);
    
  }

  listerUsers(){
    this.service.getAllUsers().subscribe((data)=>{
      console.log(data);
      return this.listUsers=data;

    })
  }
  deleteUser(id:any):void{
    if(confirm("Voulez-vous supprimer ??")){
     let userId = this.loginData.id;
   this.service.deleteUser(id, userId).subscribe((data)=>{
     
     this.listerUsers();
   });
  }
   
  }
  logOut(){
    localStorage.removeItem('isLogin');
  this.router.navigateByUrl('/');
}

exportexcel(): void 
    {
       /* table id is passed over here */
       let element = document.getElementById('example4'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       // generate workbook and add the worksheet 
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       // save to file 
       XLSX.writeFile(wb, this.fileName);

    }

    downloadPdf(){
      var element  = document.getElementById('example4')!
      html2canvas(element).then(
        (canvas) =>{
          console.log(canvas);
          var imgData = canvas.toDataURL('image/png')
          var doc = new jspdf.jsPDF()
          var imgHeight =  canvas.height * 208 / canvas.width;
          doc.addImage(imgData, 0, 0, 208, imgHeight)
          doc.save("image.pdf")
        }
      )
    }
}
