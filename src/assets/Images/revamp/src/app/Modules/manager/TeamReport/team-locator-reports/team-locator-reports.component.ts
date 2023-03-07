import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import Swal from 'sweetalert2';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-team-locator-reports',
  templateUrl: './team-locator-reports.component.html',
  styleUrls: ['./team-locator-reports.component.css']
})

export class TeamLocatorReportsComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  roledid: any;
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  currentUrl: any;
  locatorlist: any;
  startdate: any;
  enddate: any
  fileName = 'Team Locator Report.xlsx';
  filtereddate: any;
  todaydate: any;
  firstDayofcurrentmonth: any;
  showPopup: number = 0;
  messageId: number = 0;
  loader: any
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.GetMyDetails();
    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    this.filtereddate = formatDate(myDate, format, locale);
    this.todaydate = this.filtereddate;
    debugger
    this.firstDayofcurrentmonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    this.firstDayofcurrentmonth = formatDate(this.firstDayofcurrentmonth, format, locale);
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
    };
    this.roledid = localStorage.getItem('roledid');
    this.getlocatorlist();
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

  onItemSelect(item: any) {
    debugger
    this.DigiofficeService.GetLocatorRequests(10331, 1, this.firstDayofcurrentmonth, this.todaydate)
      .subscribe({
        next: data => {
          debugger
          this.locatorlist = data.filter(x => x.userID == item.id && (x.filterdate > this.startdate && x.filterdate <= this.enddate));
        }, error: (err) => {
          // Swal.fire('Issue in Getting locator Requests');
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

  public getlocatorlist() {
    debugger
    if (this.roledid == 2) {
      this.DigiofficeService.GetLocatorRequests(10331, 1, this.firstDayofcurrentmonth, this.todaydate)
        .subscribe({
          next: data => {
            debugger
            this.locatorlist = data.filter(x => x.supervisor == localStorage.getItem('staffid'));
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
    } else {
      this.DigiofficeService.GetLocatorRequests(10331, 1, this.firstDayofcurrentmonth, this.todaydate)
        .subscribe({
          next: data => {
            debugger
            this.locatorlist = data;
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

  }

  public getdate() {
    this.showPopup = 0;
    if (this.startdate == undefined) {
      /* Swal.fire('Please Select Start Date'); */
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
      /*       Swal.fire('Enddate Must Be Greater Than Startdate') */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 29;
      this.enddate = ""
      this.startdate = ""
    }
    else {
      this.DigiofficeService.GetLocatorRequests(10331, 1, this.firstDayofcurrentmonth, this.todaydate)
        .subscribe({
          next: data => {
            debugger
            this.locatorlist = data.filter(x => x.supervisor == localStorage.getItem('staffid') && (x.filterdate >= this.startdate && x.filterdate <= this.enddate));
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

  exportexcel(): void {
    debugger
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