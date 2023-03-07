import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import Swal from 'sweetalert2';
import { DigiofficecorehrService } from '../../../../Pages/Services/digiofficecorehr.service';
@Component({
  selector: 'app-leave-reports',
  templateUrl: './leave-reports.component.html',
  styleUrls: ['./leave-reports.component.css']
})

export class LeaveReportsComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  roledid: any
  startdate: any;
  enddate: any
  currentUrl: any;
  staffleaves: any;
  loader: any;
  fileName = 'Leave Report.xlsx';
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.roledid = localStorage.getItem('roledid');
    this.getstaffleaves();
  }

  public getenddate(event: any) {
    this.showPopup = 0;
    debugger
    if (this.startdate == undefined) {
      /*  Swal.fire('Please Select Start Date'); */
      this.enddate = ""
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 28
    }

    else if (this.enddate == "") {
      this.ngOnInit();
      this.enddate = "";
      this.startdate = "";
    }

    else if (this.enddate < this.startdate) {
      /*   Swal.fire('Enddate Must Be Greater Than Startdate') */
      this.enddate = ""
      this.startdate = ""
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 29
    }
    else {
      this.DigiofficeService.GetStaffLeaves(10331, 1, "01-01-2020", "01-01-2025")
        .subscribe({
          next: data => {
            debugger
            this.staffleaves = data.filter(x => (x.filterdate >= this.startdate && x.filterdate <= this.enddate) && x.staffID == localStorage.getItem('staffid'));
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Staff Leaves');
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

  public getstaffleaves() {
    debugger
    this.DigiofficeService.GetStaffLeaves(10331, 1, "01-01-2020", "01-01-2025")
      .subscribe({
        next: data => {
          debugger
          this.staffleaves = data.filter(x => x.staffID == localStorage.getItem('staffid'));
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Staff Leaves');
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