import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-team-attendance-reports',
  templateUrl: './team-attendance-reports.component.html',
  styleUrls: ['./team-attendance-reports.component.css']
})

export class TeamAttendanceReportsComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  roledid: any
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  currentUrl: any;
  staffid: any;
  employeeid: any;
  fileName = 'Team Attendance Report.xlsx';
  startdate: any;
  enddate: any;
  attendancelist: any;
  filtereddate: any;
  todaydate: any;
  firstDayofcurrentmonth: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.roledid = localStorage.getItem('roledid');
    this.staffid = localStorage.getItem('staffid');
    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    this.filtereddate = formatDate(myDate, format, locale);
    this.todaydate = this.filtereddate;
    debugger
    this.firstDayofcurrentmonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    this.firstDayofcurrentmonth = formatDate(this.firstDayofcurrentmonth, format, locale);
    this.GetAttendance();
    this.GetMyDetails();
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

  public GetMyDetails() {
    this.DigiofficeService.GetAllStaffNew()
      .subscribe({
        next: data => {
          debugger
          this.dropdownList = data.filter(x => x.supervisor == this.staffid);
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
    this.employeeid = item.id;
    if (this.startdate == undefined || this.enddate == undefined) {
      this.DigiofficeService.GetAttendanceByManagerID(this.employeeid, this.firstDayofcurrentmonth, this.todaydate)
        .subscribe({
          next: data => {
            debugger
            this.attendancelist = data.filter(x => x.userID == this.employeeid)
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
    else {
      this.DigiofficeService.GetAttendanceByManagerID(this.employeeid, this.startdate, this.enddate)
        .subscribe({
          next: data => {
            debugger
            this.attendancelist = data;
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

  public getenddate(event: any) {
    debugger
    this.showPopup=0;
    if (this.startdate == undefined) {
     /*  Swal.fire('Please Select Start Date'); */
      this.enddate = ""
      
      this.showPopup=1;
      this.messageId=82;
    }

    else if (this.enddate == "") {
      this.enddate = "";
      this.startdate = "";
      this.ngOnInit();
    }

    else if (this.enddate < this.startdate) {
      Swal.fire('Enddate Must Be Greater Than Startdate')
      this.enddate = ""
      this.startdate = ""
      this.showPopup=1;
      this.messageId=29;
    }
    else {
      if (this.roledid == 10) {
        this.DigiofficeService.GetAttendance()
          .subscribe({
            next: data => {
              debugger
              this.attendancelist = data.filter(x=>x.signinDate >= this.startdate && x.signinDate <= this.enddate);
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
      else {
        this.DigiofficeService.GetAttendanceByManagerID(this.staffid, this.startdate, this.enddate)
          .subscribe({
            next: data => {
              debugger
              this.attendancelist = data;
            }, error: (err) => {
              //Swal.fire('Issue in Getting Attendance');
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




  public GetAttendance() {
    debugger
    if (this.roledid == 10) {
      this.DigiofficeService.GetAttendance()
        .subscribe({
          next: data => {
            debugger
            this.attendancelist = data;
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
    else {
      this.DigiofficeService.GetAttendanceByManagerID(this.staffid, this.firstDayofcurrentmonth, this.todaydate)
        .subscribe({
          next: data => {
            debugger
            this.attendancelist = data;
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