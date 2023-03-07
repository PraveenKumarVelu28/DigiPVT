import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import Swal from 'sweetalert2';
import { DigiofficecorehrService } from '../../../../Pages/Services/digiofficecorehr.service';
import { ExportToCsv } from 'export-to-csv';
@Component({
  selector: 'app-attendance-reports',
  templateUrl: './attendance-reports.component.html',
  styleUrls: ['./attendance-reports.component.css']
})

export class AttendanceReportsComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  roleid: any
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  staffID: any;
  todaydate: any;
  filtereddate: any;
  firstDayofcurrentmonth: any;
  staffid: any;
  attendancelist: any;
  startdate: any;
  enddate: any
  currentUrl: any;
  loader: any;
  fileName = 'Attendance Report.xlsx';
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.roleid = localStorage.getItem('roledid');
    this.staffid = localStorage.getItem('staffid');
    this.staffID = localStorage.getItem('staffid');
    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    this.filtereddate = formatDate(myDate, format, locale);
    this.todaydate = this.filtereddate;
    debugger
    this.firstDayofcurrentmonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    this.firstDayofcurrentmonth = formatDate(this.firstDayofcurrentmonth, format, locale);
    this.GetAttendance();
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
    };
  }

  public GetAttendance() {
    debugger
    this.DigiofficeService.GetAttendanceByEmployeeID(this.staffID, this.firstDayofcurrentmonth, this.todaydate)
      .subscribe({
        next: data => {
          debugger
          this.attendancelist = data;
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

  onItemSelect(item: any) {
    debugger
    console.log(item);
    this.staffid = item.id;
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

  public getenddate(event: any) {
    this.showPopup = 0;
    debugger
    if (this.startdate == undefined) {
      /* Swal.fire('Please Select Start Date'); */
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
      /*  Swal.fire('Enddate Must Be Greater Than Startdate') */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 28;
      this.enddate = ""
      this.startdate = ""
    }
    else {
      this.DigiofficeService.GetAttendanceByEmployeeID(this.staffID, this.startdate, this.enddate)
        .subscribe({
          next: data => {
            debugger
            this.attendancelist = data;
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Attendance By Employee ID');
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
  stafflist: any;
  failedarray: any = [];
  passedarray: any = [];
  term: any
  sequenceNumber1: any
  attendancelist23: any
  companyName: any
  // public exportexcel1() {
  //   debugger
  //   let element = document.getElementById('lvs');
  //   const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);


  //   const wb: XLSX.WorkBook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, 'Attedance_Report');


  //   XLSX.writeFile(wb, this.fileName);

  // }
  public exportexcel1() {
    debugger

    if (this.term != null) {
      this.attendancelist23 = this.attendancelist.filter((x: { name: string | any[]; }) => (x.name).includes(this.term.toUpperCase()))
    }
    else {
      this.attendancelist23 = this.attendancelist

    }

    var ExportData = [];
    this.sequenceNumber1 = 0;
    for (let i = 0; i < this.attendancelist23.length; i++) {
      //debugger;
      this.sequenceNumber1 = i + 1;
      let singleData = {
        SequenceNumber: String,
        Date: String,
        EmployeeName: String,
        EmployeeNo: String,
        Position: String,
        CompanyName: String,
        ShiftTimings: String,
        ShiftDailyIN: String,
        ShiftDailyOut: String,
        ActualPunchIN: String,
        ActualPunchOut: String,
      }
      singleData.SequenceNumber = this.sequenceNumber1;
      singleData.EmployeeName = this.attendancelist23[i].staffname;
      singleData.Date = this.attendancelist23[i].signinDate;
      singleData.EmployeeNo = this.attendancelist23[i].employeID;
      singleData.Position = this.attendancelist23[i].role;
      singleData.ActualPunchIN = this.attendancelist23[i].stime;
      singleData.ActualPunchOut = this.attendancelist23[i].etime;
      singleData.ShiftDailyIN = this.attendancelist23[i].shiftStartTime;
      singleData.ShiftDailyOut = this.attendancelist23[i].shiftEndTime;
      singleData.CompanyName = this.companyName;
      singleData.ShiftTimings = this.attendancelist23[i].shiftTimeings;
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



}


// this.DigiofficeService.GetAllStaffNew().
// subscribe({
//   next: data => {
//     debugger
//     this.stafflist = data;

//     for (let i = 0; i <= this.stafflist.length; i++) {

//       this.DigiofficeService.GetMyDetailsForLogin(this.stafflist[i].emailID, this.stafflist[i].password, 9)
//         .subscribe({
//           next: data => {
//             debugger
//             let temp: any = data;
//             var obj = {
//               "employeid": this.stafflist[i].employeid
//             }
//             if (temp.length == 0) {

//               this.failedarray.push(obj);

//             }
//             else {
//               this.passedarray.push(obj);

//             }
//             if (this.stafflist.length - 1 == i) {
//               console.log('failedarray', this.failedarray);
//               console.log('passedarray', this.passedarray)
//             }
//           }, error: (err) => {
//             Swal.fire('Issue in Getting My Details For Login');
//             this.loader = false;
//             // Insert error in Db Here//
//             var obj = {
//               'PageName': this.currentUrl,
//               'ErrorMessage': err.error.message
//             }
//             this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
//               data => {
//                 debugger
//               },
//             )
//           }
//         })
//     }




//   }, error: (err) => {
//     Swal.fire('Issue in Getting All Staff');
//     // Insert error in Db Here//
//     var obj = {
//       'PageName': this.currentUrl,
//       'ErrorMessage': err.error.message
//     }
//     this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
//       data => {
//         debugger
//       },
//     )
//   }
// })
