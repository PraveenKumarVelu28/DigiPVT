import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from '../../../../Pages/Services/digiofficecorehr.service';
import * as XLSX from 'xlsx';
import { formatDate } from '@angular/common';
import Swal from 'sweetalert2';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Component({
  selector: 'app-locater-reports',
  templateUrl: './locater-reports.component.html',
  styleUrls: ['./locater-reports.component.css']
})

export class LocaterReportsComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  roleid: any;
  staffID: any;
  todaydate: any;
  filtereddate: any;
  currentUrl: any;
  firstDayofcurrentmonth: any;
  fileName = 'Locator Report.xlsx';
  startdate: any;
  enddate: any;
  locatorlist: any;
  loader: any;
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
    this.getlocatorlist();
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

  public getlocatorlist() {
    debugger
    this.DigiofficeService.GetLocatorRequests(this.staffID, 1, "01-01-2020", "01-01-2025")
      .subscribe({
        next: data => {
          debugger
          // this.locatorlist = data;
          this.locatorlist = data.filter(x => x.userID == localStorage.getItem('staffid'))

          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Locator List');
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

  public Getenddate() {
    this.showPopup = 0;
    if (this.startdate == undefined) {
      /*  Swal.fire('Please Select Start Date'); */
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
      Swal.fire('Enddate Must Be Greater Than Startdate')
      this.enddate = ""
      this.startdate = ""
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 29;
    }
    else {
      this.DigiofficeService.GetLocatorRequests(10331, 1, this.firstDayofcurrentmonth, this.todaydate)
        .subscribe({
          next: data => {
            debugger
            this.locatorlist = data.filter(x => x.userID == localStorage.getItem('staffid') && (x.filterdate >= this.startdate && x.filterdate <= this.enddate));
          }, error: (err) => {
            // Swal.fire('Issue in Getting Locator Requests');
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