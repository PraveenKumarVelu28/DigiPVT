import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import { FullCalendarOptions, EventObject } from 'ngx-fullcalendar';
import { DatePipe } from '@angular/common';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Component({
  selector: 'app-team-leave-reports',
  templateUrl: './team-leave-reports.component.html',
  styleUrls: ['./team-leave-reports.component.css']
})

export class TeamLeaveReportsComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  roledid: any
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  currentUrl: any;
  EmployeeId: any;
  staffleaves: any;
  startdate: any;
  enddate: any
  fileName = 'Leave Report.xlsx';
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.roledid = localStorage.getItem('roledid');
    this.getstaffleaves();
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
          this.dropdownList = data.filter(x => x.supervisor == localStorage.getItem('staffid'));
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

  public getenddate(event: any) {
    debugger
    this.showPopup = 0;
    if (this.startdate == undefined) {
      /*       Swal.fire('Please Select Start Date'); */
      this.enddate = ""

      this.showPopup = 1;
      this, this.messageId = 82
    }

    else if (this.enddate == "") {
      this.enddate = "";
      this.startdate = "";
      this.ngOnInit();
    }

    else if (this.enddate < this.startdate) {
      /*   Swal.fire('Enddate Must Be Greater Than Startdate') */
      this.enddate = ""
      this.startdate = ""
      this.showPopup = 1;
      this, this.messageId = 29
    }
    else {
      this.DigiofficeService.GetStaffLeaves(10331, 1, "01-01-2020", "01-01-2025")
        .subscribe({
          next: data => {
            debugger
            // this.staffleaves = data.filter(x => x.filterdate > this.startdate && x.filterdate < this.enddate);
            // this.staffleaves = data.filter(x => x.supervisor == localStorage.getItem('staffid') && (x.filterdate >= this.startdate && x.filterdate <= this.enddate));
            this.staffleaves = data.filter((x: { supervisor: string | null; }) => x.supervisor == localStorage.getItem('staffid'));
            this.staffleaves = data.filter(x => (x.filterdate >= this.startdate && x.filterdate <= this.enddate));
          }, error: (err) => {
            //Swal.fire('Issue in Getting Staff Leaves');
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

  onItemSelect(item: any) {
    debugger
    console.log(item);
    this.EmployeeId = item.id;
    if (this.startdate == undefined || this.enddate == undefined) {
      this.DigiofficeService.GetStaffLeaves(10331, 1, "01-01-2020", "01-01-2025")
        .subscribe({
          next: data => {
            debugger
            this.staffleaves = data.filter(x => x.staffID == this.EmployeeId);
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
    } else {
      this.DigiofficeService.GetStaffLeaves(10331, 1, "01-01-2020", "01-01-2025")
        .subscribe({
          next: data => {
            debugger
            this.staffleaves = data.filter(x => (x.filterdate > this.startdate && x.filterdate < this.enddate) && x.staffID == this.EmployeeId);
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

  public getstaffleaves() {
    debugger
    if (this.roledid == 2) {
      this.DigiofficeService.GetStaffLeaves(10331, 1, "01-01-2020", "01-01-2025")
        .subscribe({
          next: data => {
            debugger
            this.staffleaves = data.filter((x: { supervisor: string | null; }) => x.supervisor == localStorage.getItem('staffid'));
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
    else {
      this.DigiofficeService.GetStaffLeaves(10331, 1, "01-01-2020", "01-01-2025")
        .subscribe({
          next: data => {
            debugger
            this.staffleaves = data;
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

}