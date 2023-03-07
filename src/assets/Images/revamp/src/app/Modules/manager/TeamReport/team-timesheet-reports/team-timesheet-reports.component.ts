import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import Swal from 'sweetalert2';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
@Component({
  selector: 'app-team-timesheet-reports',
  templateUrl: './team-timesheet-reports.component.html',
  styleUrls: ['./team-timesheet-reports.component.css']
})

export class TeamTimesheetReportsComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  roleid: any
  currentUrl: any;
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  timesheets: any = [];
  EmployeeId: any;
  startdate: any;
  enddate: any
  fileName = 'Timesheet Report.xlsx';
  showPopup: number = 0;
  messageId: number = 0;
  loader: any
  ngOnInit(): void {
    debugger
    this.currentUrl = window.location.href;
    this.roleid = localStorage.getItem('roledid');
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
    this.GetTimeSheetDetailsforweb();
  }

  public GetMyDetails() {
    this.DigiofficeService.GetMyDetails()
      .subscribe({
        next: data => {
          debugger
          this.dropdownList = data;
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

  public GetTimeSheetDetailsforweb() {

    if (this.roleid == 2) {
      this.DigiofficeService.GetTimeSheetDetailsforweb()
        .subscribe({
          next: data => {
            debugger
            this.timesheets = data.filter(x => x.supervisor == localStorage.getItem('staffid'));
          }, error: (err) => {
            // Swal.fire('Issue in Getting Time Sheet Details For Web');
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
    } else {
      this.DigiofficeService.GetTimeSheetDetailsforweb()
        .subscribe({
          next: data => {
            debugger
            this.timesheets = data;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Time Sheet Details For Web');
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

  onItemSelect(item: any) {
    debugger
    console.log(item);
    this.EmployeeId = item.id;
    if (this.startdate == undefined || this.enddate == undefined) {
      this.DigiofficeService.GetTimeSheetDetailsforweb()
        .subscribe({
          next: data => {
            debugger
            this.timesheets = data.filter(x => x.userID == this.EmployeeId);
          }, error: (err) => {
            // Swal.fire('Issue in Getting Time Sheet Details For Web');
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
    } else {
      this.DigiofficeService.GetTimeSheetDetailsforweb()
        .subscribe({
          next: data => {
            debugger
            this.timesheets = data.filter(x => x.userID == this.EmployeeId && (x.filterdate >= this.startdate && x.filterdate <= this.enddate));
          }, error: (err) => {
            // Swal.fire('Issue in Getting Time Sheet Details For Web');
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

  public Getenddate() {
    debugger;
    this.showPopup = 0;
    if (this.startdate == undefined) {
      /*    Swal.fire('Please Select Start Date'); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 82;
      this.enddate = ""
    }

    else if (this.enddate == "") {
      this.enddate = "";
      this.startdate = "";
      this.ngOnInit();
    }

    else if (this.enddate < this.startdate) {
      /* Swal.fire('Enddate Must Be Greater Than Startdate') */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 29;
      this.enddate = ""
      this.startdate = ""
    }
    else {
      this.DigiofficeService.GetTimeSheetDetailsforweb()
        .subscribe({
          next: data => {
            debugger
            this.timesheets = data.filter(x => x.supervisor == localStorage.getItem('staffid') && (x.filterdate >= this.startdate && x.filterdate <= this.enddate));
          }, error: (err) => {
            // Swal.fire('Issue in Getting Time Sheet Details For Web');
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