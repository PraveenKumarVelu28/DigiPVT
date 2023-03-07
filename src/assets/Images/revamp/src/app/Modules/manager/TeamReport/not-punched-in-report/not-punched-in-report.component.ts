import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-not-punched-in-report',
  templateUrl: './not-punched-in-report.component.html',
  styleUrls: ['./not-punched-in-report.component.css']
})

export class NotPunchedInReportComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  roledid: any
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  currentUrl: any
  staffid: any;
  employeeid: any;
  startdate: any;
  enddate: any;
  attendancelist: any;
  loader:any;
  fileName = 'Not Punched Out Report.xlsx';

  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader=true;
    this.roledid = localStorage.getItem('roledid');
    this.staffid = localStorage.getItem('staffid');
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
    this.DigiofficeService.GetMyDetails()
      .subscribe({
        next: data => {
          debugger
          this.dropdownList = data;
          this.loader=false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting My Details');
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
      this.DigiofficeService.GetAttendance()
        .subscribe({
          next: data => {
            debugger
            this.attendancelist = data.filter(x => x.userID == this.employeeid && x.signoutDate == null);
            this.loader=false;
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
      this.DigiofficeService.GetAttendance()
        .subscribe({
          next: data => {
            debugger
            this.attendancelist = data.filter(x => x.userID == this.employeeid && (x.filterdate >= this.startdate && x.filterdate <= this.enddate) && x.signoutDate == null);
            this.loader=false;
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
    if (this.enddate == "") {
      this.ngOnInit();
    } else {
    if (this.roledid == 2) {
      this.DigiofficeService.GetAttendance()
        .subscribe({
          next: data => {
            debugger
            this.attendancelist = data.filter(x => x.supervisor == this.staffid && (x.filterdate >= this.startdate && x.filterdate <= this.enddate) && x.signoutDate == null);
            this.loader=false;
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
      this.DigiofficeService.GetAttendance()
        .subscribe({
          next: data => {
            debugger
            this.attendancelist = data.filter(x => (x.filterdate >= this.startdate && x.filterdate <= this.enddate) && x.signoutDate == null);
            this.loader=false;
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
  }

  public GetAttendance() {
    debugger
    if (this.roledid == 2) {
      this.DigiofficeService.GetAttendance()
        .subscribe({
          next: data => {
            debugger
            this.attendancelist = data.filter(x => x.supervisor == this.staffid && x.signoutDate == null);
            this.loader=false;
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
      this.DigiofficeService.GetAttendance()
        .subscribe({
          next: data => {
            debugger
            this.attendancelist = data.filter(x => x.signoutDate == null);
            this.loader=false;
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