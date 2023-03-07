import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from '../../../../Pages/Services/digiofficecorehr.service';
import * as XLSX from 'xlsx';
import { formatDate } from '@angular/common';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import Swal from 'sweetalert2';
import { ExportToCsv } from 'export-to-csv';
@Component({
  selector: 'app-attendence-details',
  templateUrl: './attendence-details.component.html',
  styleUrls: ['./attendence-details.component.css']
})

export class AttendenceDetailsComponent implements OnInit {
  sequenceNumber1: any;

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  p: any = 1;
  count1: any = 10;
  count: any;
  roleid: any
  staffID: any;
  filtereddate: any;
  todaydate: any;
  loader: any;
  firstDayofcurrentmonth: any;
  currentUrl: any;
  startingTime1: any;
  endTime1: any;
  attendancelist: any;
  startdate: any;
  enddate: any;
  LastDayOfMonth: any;
  fileName = 'Attendance Report.xlsx';
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
    this.LastDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 30);
    this.firstDayofcurrentmonth = formatDate(this.firstDayofcurrentmonth, format, locale);
    this.LastDayOfMonth = formatDate(this.LastDayOfMonth, format, locale);
    this.GetAttendance();
  }

  public GetAttendance() {
    debugger
    this.loader = true;
    this.DigiofficeService.GetAttendanceByEmployeeID(this.staffID, this.firstDayofcurrentmonth, this.LastDayOfMonth)
      .subscribe({
        next: data => {
          debugger
          this.attendancelist = data;
          this.loader = false;
        }, error: (err) => {
          this.loader = false;
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
      this.startdate = "";
      this.enddate = "";
      this.ngOnInit();

    } else if (this.enddate < this.startdate) {
      /*   Swal.fire('Enddate Must Be Greater Than Startdate') */

      this.loader = false;
      this.showPopup = 1;
      this.messageId = 29;
      this.startdate = "";
      this.enddate = "";
    }
    else if (this.startdate == "" || this.startdate == undefined) {
      /* Swal.fire('Please Select the Start Date First'); */

      this.loader = false;
      this.showPopup = 1;
      this.messageId = 32;
      this.startdate = "";
      this.enddate = "";
    }
    else {
      this.DigiofficeService.GetAttendanceByEmployeeID(this.staffID, this.startdate, this.enddate)
        .subscribe({
          next: data => {
            debugger
            this.attendancelist = data;
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Attendance By EmployeeID');
            this.loader = false;
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

  // exportexcel(): void {
  //   /* table id is passed over here */
  //   let element = document.getElementById('lvs');
  //   const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

  //   /* generate workbook and add the worksheet */
  //   const wb: XLSX.WorkBook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  //   /* save to file */
  //   XLSX.writeFile(wb, this.fileName);
  // }


  public exportexcel() {
    debugger

    // if(this.term!=null){
    //   this.attendancelist=this.attendancelist.filter((x: { name: string | any[]; })=>(x.name).includes(this.term.toUpperCase()))
    // }
    // else{
    //   this.attendancelist=this.attendancelist

    // }

    var ExportData = [];
    this.sequenceNumber1 = 0;
    for (let i = 0; i < this.attendancelist.length; i++) {
      //debugger;
      this.sequenceNumber1 = i + 1;
      let singleData = {
        SequenceNumber: String,
        Date: String,
        signInType: String,
        ExpectedInTime: String,
        PunchInTime: String,
        PunchInLocationIPAddress: String,
        ExpectedOutTime: String,
        PunchOutTime: String,
        // SignOutType: String,
        WorkHours: String,
        UnderTime: String,
        Late: String
      }
      singleData.SequenceNumber = this.sequenceNumber1;
      singleData.Date = this.attendancelist[i].dobforattedance;
      singleData.signInType = this.attendancelist[i].signInType;
      singleData.ExpectedInTime = this.attendancelist[i].expectedIn;
      singleData.PunchInTime = this.attendancelist[i].stime;
      singleData.PunchInLocationIPAddress = this.attendancelist[i].signinLocation;
      singleData.ExpectedOutTime = this.attendancelist[i].expectedOut;
      singleData.PunchOutTime = this.attendancelist[i].etime;
      // singleData.SignOutType = this.attendancelist[i].shiftEndTime;
      singleData.WorkHours = this.attendancelist[i].hr1;
      singleData.UnderTime = this.attendancelist[i].undertime;
      singleData.Late = this.attendancelist[i].latepunchin;
      ExportData.push(singleData);
      //debugger
    }
    const Export_to_excel_options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'GENERATE REPORT',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      filename: 'Employee_Attendance_Report'
    };
    const csvExporter = new ExportToCsv(Export_to_excel_options);
    //debugger
    csvExporter.generateCsv(ExportData);

  }
  exporttoexcelsearch() {
    this.fileName = 'Attendance Report.xlsx'
    let element = document.getElementById('lvs');

    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }



}