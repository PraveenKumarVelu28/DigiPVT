import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import { formatDate } from '@angular/common';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
@Component({
  selector: 'app-employment-certificate',
  templateUrl: './employment-certificate.component.html',
  styleUrls: ['./employment-certificate.component.css']
})
export class EmploymentCertificateComponent implements OnInit {

  showsalary:any
  showcalamity:any
  showhdmfsalary:any
  showhdmfcalamity:any
  myDate:any;
  constructor(public DigiofficeService: DigiofficecorehrService, private datePipe: DatePipe){}
  stafflist:any;
  uniquelist:any;
  companylist:any;
  companyname:any;
  Address:any;
  staffid:any;
  roleid:any;
  loader:any;
  p: any = 1;
  count1: any = 10;
  ssssalary:any;
  month:any;
  year:any;
  sign:any;
  username:any;
  todaydate:any;
  currentUrl:any;
  roleList:any;
  short:any;
  ID:any;
  role:any;

  ngOnInit(): void {
  this.currentUrl = window.location.href;
  this.month="0"
  this.year="0"
  this.sign="0"
    // this.myDate = new Date();
    const format = 'dd-MM-yyyy';
    const myDate = new Date();
    const locale = 'en-US';
    var curr = new Date;
    this.todaydate = formatDate(myDate, format, locale);
    this.username = localStorage.getItem('UserName');
    this.staffid=localStorage.getItem('staffid')
    this.roleid = sessionStorage.getItem('roledid');
    debugger
    this.GetAllStaffNew();
  }

  getempcert(){

  }

  getsign(){

  }
  

  public convetToPDF1() {
    debugger
   
    var data: any = document.getElementById('downloadaplication');
    html2canvas(data).then(canvas => {
   
      var margin = 5;
      var imgWidth = 208
      // var pageHeight = 295 - 10 * margin;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      var doc = new jsPDF('p', 'mm');
      var position = 0;
      while (heightLeft > 0) {

        const contentDataURL = canvas.toDataURL('image/png')
        position = heightLeft - imgHeight;

        doc.addPage();


        doc.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      
        heightLeft -= pageHeight;

      }
      doc.deletePage(1)
      doc.save('EmployeeCertificate.pdf');
      
      var pdf1 = doc.output('blob');
      var file = new File([pdf1], "EmployeeCertificate.pdf");
      let body = new FormData();
      debugger
      body.append('Dan', file);
      console.log('pdf', pdf1)
    


    }).then(() => {
     
    });;
  }

  public GetAllStaffNew() {
    debugger
    this.DigiofficeService.GetAllStaffNew()
      .subscribe({
        next: data => {
          debugger
        
          this.stafflist = data.filter(x=>x.id==this.staffid);
        }, error: (err) => {
          // Swal.fire('Issue in Getting Role Type');
          // Insert error in Db Here//
          var obj = {
            'PageName': this.currentUrl,
            'ErrorMessage': err.error.message
          }
          this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
            data => {
              debugger
            },
          )
        }
      })
  }

}

