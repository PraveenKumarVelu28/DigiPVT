import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Component({
  selector: 'app-myteamtravelreport',
  templateUrl: './myteamtravelreport.component.html',
  styleUrls: ['./myteamtravelreport.component.css']
})

export class MyteamtravelreportComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, public router: Router) { }
  roleid: any;
  StaffID: any;
  currentUrl: any;
  travellist: any
  sdate: any;
  edate: any;
  fileName = 'Travel Report.xlsx';
  showPopup: number = 0;
  messageId: number = 0;
  loader: any
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.roleid = localStorage.getItem('roledid');
    this.StaffID = localStorage.getItem('staffid')
    this.GetTransportationRequests();
  }

  public GetTransportationRequests() {
    debugger
    this.DigiofficeService.GetTransportationRequests()
      .subscribe({
        next: data => {
          debugger
          this.travellist = data.filter(x => x.supervisor == this.StaffID)
        }, error: (err) => {
          // Swal.fire('Issue in Getting Transportation Requests');
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

  public CancelLeave(list: any) {
    debugger;
    this.showPopup = 0;
    this.DigiofficeService.RejectTravelRequest(list.id, 'Cancelled by Staff')
      .subscribe({
        next: data => {
          debugger
          /*  Swal.fire('Cancelled Successfully'); */
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 30
          this.ngOnInit();
        }, error: (err) => {
          // Swal.fire('Issue in Rejecting Travel Request');
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

  public getdate() {
    debugger
    if (this.edate == "") {
      this.ngOnInit();
    } else {
      this.DigiofficeService.GetTransportationRequests()
        .subscribe({
          next: data => {
            debugger
            this.travellist = data.filter(x => (x.filterdate >= this.sdate && x.filterdate <= this.edate) && x.supervisor == this.StaffID);
          }, error: (err) => {
            // Swal.fire('Issue in Getting Transportation Requests');
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

  exportexcel(): void {
    /* table id is passed over here */
    let element = document.getElementById('lvs');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

}