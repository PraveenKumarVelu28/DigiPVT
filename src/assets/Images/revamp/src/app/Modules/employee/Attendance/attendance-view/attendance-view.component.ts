import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from '../../../../Pages/Services/digiofficecorehr.service';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import { formatDate } from '@angular/common';
import Swal from 'sweetalert2';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-attendance-view',
  templateUrl: './attendance-view.component.html',
  styleUrls: ['./attendance-view.component.css']
})

export class AttendanceViewComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  roleid: any;
  staffID: any;
  loader: any;
  currentUrl: any;
  firstdayofcurrentweek: any
  lastdayofcurrentweek: any
  firstDayofcurrentmonth: any
  todaydate: any
  attendancelist: any;
  startingTime1: any;
  endTime1: any;
  startdate: any;
  enddate: any
  p: any = 1;
  count1: any = 10;
  count: any;
  fileName = 'Regularization Report.xlsx';
  lastDayofcurrentmonth:any;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader=true;
    this.roleid = localStorage.getItem('roledid');
    this.staffID = localStorage.getItem('staffid');
    this.GetAttendance();
    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    var curr = new Date;
    this.todaydate = formatDate(myDate, format, locale);
    var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    var last = first + 6; // last day is the first day + 6
    this.firstdayofcurrentweek = new Date(curr.setDate(first)).toUTCString();
    this.lastdayofcurrentweek = new Date(curr.setDate(last)).toUTCString();

    this.firstDayofcurrentmonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    this.firstDayofcurrentmonth = formatDate(this.firstDayofcurrentmonth, format, locale);

    this.lastDayofcurrentmonth = new Date(new Date().getFullYear(), new Date().getMonth(), 30);
    this.lastDayofcurrentmonth = formatDate(this.lastDayofcurrentmonth, format, locale);

    this.firstdayofcurrentweek = formatDate(this.firstdayofcurrentweek, format, locale);
    this.lastdayofcurrentweek = formatDate(this.lastdayofcurrentweek, format, locale);
  }

  public GetAttendance() {
    debugger
    this.loader=true;
    this.DigiofficeService.GetAttendanceByEmployeeID(this.staffID,'01-01-2020','01-02-2026')
      .subscribe({
        next: data => {
          debugger
          this.attendancelist = data.filter(x => x.userID == this.staffID && x.latepunchin == 'Yes');
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Attendance');
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

  public getenddate(event: any) {
    debugger
    this.loader = true;
    if (this.enddate == "") {
      this.ngOnInit();
    } else {
    this.DigiofficeService.GetAttendanceByEmployeeID(this.staffID,this.startdate,this.enddate)
      .subscribe({
        next: data => {
          debugger
          this.attendancelist = data.filter(x => x.latepunchin == 'Yes')
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Attendance');
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

  public currentweek() {
    debugger
    this.loader = true;
    this.DigiofficeService.GetAttendanceByEmployeeID(this.staffID,this.firstdayofcurrentweek,this.lastdayofcurrentweek)
      .subscribe({
        next: data => {
          debugger
          this.attendancelist = data.filter(x => x.latepunchin == 'Yes');
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Attendance');
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

  public currentmonth() {
    this.loader = true;
    this.DigiofficeService.GetAttendanceByEmployeeID(this.staffID,this.firstDayofcurrentmonth,this.lastDayofcurrentmonth)
      .subscribe({
        next: data => {
          debugger
          this.attendancelist = data.filter(x => x.latepunchin == 'Yes');
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Attendance');
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

}