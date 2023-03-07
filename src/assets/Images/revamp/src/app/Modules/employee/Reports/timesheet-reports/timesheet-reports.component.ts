import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from '../../../../Pages/Services/digiofficecorehr.service';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-timesheet-reports',
  templateUrl: './timesheet-reports.component.html',
  styleUrls: ['./timesheet-reports.component.css']
})

export class TimesheetReportsComponent implements OnInit {

  constructor(public router: Router, public DigiofficeService: DigiofficecorehrService) { }
  roleid: any;
  staffID: any;
  filtereddate: any;
  todaydate: any;
  firstDayofcurrentmonth: any;
  timesheets: any
  currentUrl: any;
  startdate: any;
  enddate: any;
  loader: any;
  fileName = 'Timesheet Report.xlsx';
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.roleid = localStorage.getItem('roledid');
    this.staffID = localStorage.getItem('staffid');
    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    this.filtereddate = formatDate(myDate, format, locale);
    this.todaydate = this.filtereddate;
    debugger
    this.firstDayofcurrentmonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    this.firstDayofcurrentmonth = formatDate(this.firstDayofcurrentmonth, format, locale);
    this.GetTimeSheetDetailsforwebByEmployeeID();
  }

  public GetTimeSheetDetailsforwebByEmployeeID() {
    this.DigiofficeService.GetTimeSheetDetailsforweb()
      .subscribe({
        next: data => {
          debugger
          this.timesheets = data.filter(x => x.userID == localStorage.getItem('staffid'));
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Timesheet Details For Web By EmployeeID');
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

  public newlevae() {
    debugger
    this.router.navigate(['/Timesheetform']);
    this.loader = false;
  }

  public Getenddate() {
    debugger
    this.showPopup = 0;

    if (this.startdate == undefined) {
      /*   Swal.fire('Please Select Start Date'); */
      this.enddate = ""
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 28;
    }

    else if (this.enddate == "") {
      this.enddate = "";
      this.startdate = "";
      this.ngOnInit();
    }

    else if (this.enddate < this.startdate) {
      /* Swal.fire('Enddate Must Be Greater Than Startdate') */
      this.enddate = ""
      this.startdate = ""
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 29;
    }
    else {
      this.DigiofficeService.GetTimeSheetDetailsforweb()
        .subscribe({
          next: data => {
            debugger
            this.timesheets = data.filter(x => x.userID == localStorage.getItem('staffid') && (x.filterdate >= this.startdate && x.filterdate <= this.enddate));
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Timesheet Details For Web By EmployeeID');
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

}