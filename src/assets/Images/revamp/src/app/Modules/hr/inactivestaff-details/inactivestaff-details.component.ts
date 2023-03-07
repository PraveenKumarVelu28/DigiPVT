import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import { timeStamp } from 'console';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-inactivestaff-details',
  templateUrl: './inactivestaff-details.component.html',
  styleUrls: ['./inactivestaff-details.component.css']
})
export class InactivestaffDetailsComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, public router: Router) { }
  companyid : any
  activestaff : any
  inactivestaff : any
  remainig : any
  iteam : any
  month:any
  

  ngOnInit(): void {
    this.companyid = 1;
    this.month = 0;
    this.GetStaff();
    
  }
  fileName = 'IN ACTIVE STAFF DETAILS.xlsx';
  exportexcel(): void {
    this.loader = false;
    /* table id is passed over here */
    let element = document.getElementById('lvs');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
    this.loader = false;
  }

  public getCompanyDetails() {
    this.DigiofficeService.GetStaffLicenseDetailsbycompany(this.companyid).
      subscribe({
        next: data => {
          //debugger
          let countdetails: any = data;
          this.activestaff = countdetails[0].activestaff;
          this.inactivestaff = countdetails[0].inactivestaff;
          this.remainig = 5400 - (this.activestaff + this.inactivestaff);

        }, error: (err) => {

        }
      })
  }

  getmonth(){
    this.DigiofficeService.GetAllStaffNewforinactivestaff(this.month).
    subscribe({
      next: data => {
        debugger
        // this.stafflist = data;
        this.stafflist = data;
        this.stafflistCopy = this.stafflist;
        this.loader = false;
      }, error: (err) => {
        // Swal.fire('Issue in Getting All Staff');
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
  apiurl:any

  stafflist : any
  stafflistCopy : any
  stafflist1 : any
  stafflistCopy1 : any
  loader : any
  currentUrl : any
  public GetStaff() {
    this.DigiofficeService.GetAllStaffNewforinactivestaff(0).
      subscribe({
        next: data => {
          debugger
          // this.stafflist = data;
          this.stafflist = data;
          this.stafflistCopy = this.stafflist;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting All Staff');
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
