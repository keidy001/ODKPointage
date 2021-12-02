import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import * as XLSX from 'xlsx';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
<<<<<<< HEAD
import * as es6printJS from "print-js";
import * as printJS from 'print-js';
=======
<<<<<<< HEAD
import * as es6printJS from "print-js";
import * as printJS from 'print-js';
=======
>>>>>>> 368b21bd76ce5c7832f661e6cf897db3841a7165
>>>>>>> 0ffe7f28ad1fc09f6c9089ad1e55dc0542972b9f
@Component({
  selector: 'app-user-space',
  templateUrl: './user-space.component.html',
  styleUrls: ['./user-space.component.css']
})
export class UserSpaceComponent implements OnInit {
  listUser: any;
  loginData : any;
  fileName = "listeAdmin.xlsx";
<<<<<<< HEAD
  searchText: any;
=======
<<<<<<< HEAD
  searchText: any;
=======
>>>>>>> 368b21bd76ce5c7832f661e6cf897db3841a7165
>>>>>>> 0ffe7f28ad1fc09f6c9089ad1e55dc0542972b9f
  constructor(
    public service : UsersService,
    public router : Router,
    ) { }

  ngOnInit(): void {
    this.loginData = JSON.parse(localStorage["isLogin"]);
    this.service.afficherListPointage().subscribe(
      (data)=>{
        console.log(data);
        this.listUser = data
      }
    )
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
<<<<<<< HEAD

   // save to file 
   XLSX.writeFile(wb, this.fileName);
=======
<<<<<<< HEAD
>>>>>>> 0ffe7f28ad1fc09f6c9089ad1e55dc0542972b9f

   // save to file 
   XLSX.writeFile(wb, this.fileName);
=======
>>>>>>> 368b21bd76ce5c7832f661e6cf897db3841a7165

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
imprimerPdf() {
  console.log({
    node_module: printJS,
    es6_module: es6printJS
  });
  es6printJS("example4", "html");
}
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
imprimerPdf() {
  console.log({
    node_module: printJS,
    es6_module: es6printJS
  });
  es6printJS("example4", "html");
}
}
